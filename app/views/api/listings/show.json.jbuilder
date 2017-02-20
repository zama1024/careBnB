json.partial! '/api/listings/listing', listing: @listing
json.host @listing.host
json.reviews @listing.reviews
