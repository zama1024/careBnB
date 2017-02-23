require 'geocoder'
@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'listing', listing: listing
  end
end
json.map_center @map_center
