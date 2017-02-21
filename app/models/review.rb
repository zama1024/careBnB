class Review < ActiveRecord::Base
  validates :accuracy_rating,
    :communication_rating,
    :cleanliness_rating,
    :location_rating,
    :checkin_rating,
    :value_rating,
    :description,
    :review_helpfulness,
    :author_id,
    :listing_id, presence: true

  belongs_to :listing,
    class_name: "Listing",
    foreign_key: :listing_id,
    primary_key: :id

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
end