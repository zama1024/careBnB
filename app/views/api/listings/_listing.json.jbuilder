json.extract! listing, :id, :host_id, :title, :description, :daily_rate,
 :donation_percentage, :address, :city, :listing_photo_url, :max_guests,
 :num_bedroom,:listing_type,:listing_beds,:num_bathroom,:check_in,
 :check_out,:property_type, :service_fee, :monthly_discount, :weekly_discount

# json.reviews do
#   json.partial! 'api/reviews/review', collection: bench.reviews, as: :review
# end
