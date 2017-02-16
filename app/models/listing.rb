class Listing < ActiveRecord::Base
  validates :host_id, :title, :daily_rate, :donation_percentage, :address, :city, presence: true

  belongs_to :host,
  class_name: "User",
  foreign_key: :host_id,
  primary_key: :id
end
