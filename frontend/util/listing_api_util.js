export const createListing = (listing) => {
  return $.ajax({
    method: "POST",
    url: "./api/listings",
    data: { listing }
  });
};

export const fetchListings = (listings) => {
  return $.ajax({
    method: 'GET',
    url: 'api/listings',
    data: listings
  });
};

export const fetchListing = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  });
};
