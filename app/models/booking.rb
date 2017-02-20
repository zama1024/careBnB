class Booking < ActiveRecord::Base
  validates :user, :listing, :start_date, :end_date, presence: true
  validate :valid_dates, :availability

  belongs_to :user
  belongs_to :listing


  def valid_dates
    return unless self.start_date && self.end_date
    return if self.start_date < self.end_date
      errors[:start_date] << "can't be later than end date"
      errors[:end_date] << "can't be earlier than start date"
  end

  def availability
    return unless self.start_date && self.end_date
    unless self.listing.is_available?(self.start_date, self.end_date)
      errors[:spot] << "Sorry, the date you have chosen in not available"
    end
  end
end
