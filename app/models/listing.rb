class Listing < ActiveRecord::Base
  validates :host_id, :title, :daily_rate, :donation_percentage, :address, :city, presence: true

  has_attached_file :image, default_url: "room.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :host,
  class_name: "User",
  foreign_key: :host_id,
  primary_key: :id

  has_many :reviews,
  class_name: "Review",
  foreign_key: :listing_id,
  primary_key: :id

  has_many :bookings,
  class_name: "Booking",
  foreign_key: :listing_id,
  primary_key: :id

  def self.find_by_params(searchParams)
    return Listing.all if searchParams[:address] == "" && searchParams[:checkIn] == "" && searchParams[:checkOut] == "" && searchParams[:guests] == "";
    if searchParams[:address] != ""
      @listings = Listing.where("LOWER(city)  LIKE ?", "%#{searchParams[:address].downcase}%")
      if @listings = []
        @listings = Listing.where("LOWER(address) LIKE ?", "%#{searchParams[:address].downcase}%")
      end
    end

    if searchParams[:guests] != ""
      if @listings
        @listings = @listings.where("max_guests >= ?", searchParams[:guests])
      else
        @listings = Listing.where("max_guests >= ?", searchParams[:guests])
      end
    end

    if searchParams[:checkIn] != "" && searchParams[:checkOut] != ""
      if @listings
        @listings = @listings.select do |listing|
          listing.is_available?(Date.parse(searchParams[:checkIn]), Date.parse(searchParams[:checkOut]))
        end
      else
        @listings = Listing.all
      end
    end
    return @listings
  end

  def is_available?(start_date, end_date)
    self.bookings.each do |booking|
      if booking.start_date <= end_date && start_date <= booking.end_date
        return false
      end
    end
    true
  end

  def self.find_by_filters(bounds, max_price, min_price, start_date, end_date)
    if bounds
      south_lat = bounds[:southWest][:lat]
      north_lat = bounds[:northEast][:lat]
      west_lng = bounds[:southWest][:lng]
      east_lng = bounds[:northEast][:lng]

      listings = Listing.where(
        lat: (southern_lat..northern_lat),
        lng: (western_lng..eastern_lng),
        price: (min_price..max_price)
      )
    else
      listings = Listing.all
    end

    if start_date == "" || end_date == ""
      return listings
    else
      return listings.select do |listing|
        listing.is_available?(Date.parse(start_date), Date.parse(end_date))
      end
    end
  end

  def self.in_bounds(bounds)
   self.where("lat < ?", bounds[:northEast][:lat])
       .where("lat > ?", bounds[:southWest][:lat])
       .where("lng > ?", bounds[:southWest][:lng])
       .where("lng < ?", bounds[:northEast][:lng])
 end
end
