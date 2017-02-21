class Listing < ActiveRecord::Base
  validates :host_id, :title, :daily_rate, :donation_percentage, :address, :city, presence: true

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

  def is_available?(start_date, end_date)
    self.bookings.each do |booking|
      if booking.start_date <= end_date && start_date <= booking.end_date
        return false
      end
    end
    true
  end
end
