json.extract! listing, :id, :host_id, :title, :description, :daily_rate,
 :donation_percentage, :address, :city, :listing_photo_url, :max_guests,
 :num_bedroom,:listing_type,:listing_beds,:num_bathroom,:check_in,
 :check_out,:property_type, :service_fee, :monthly_discount, :weekly_discount, :lat, :lng
 json.image_url asset_path(listing.image.url)

json.reviews listing.reviews
