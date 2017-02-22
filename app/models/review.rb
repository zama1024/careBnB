class Review < ActiveRecord::Base
  validates :accuracy_rating, :communication_rating, :cleanliness_rating, :location_rating, :checkin_rating, :value_rating, :author_id, :listing_id, presence: true, :numericality => { :greater_than => 0 }
  validates :description, presence: true, length: { minimum: 1 }
  validates :review_helpfulness, presence: true

  belongs_to :listing,
    class_name: "Listing",
    foreign_key: :listing_id,
    primary_key: :id

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
end
