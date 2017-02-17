export const createListing = (listing) => {
  return $.ajax({
    method: "POST",
    url: "./api/listings",
    data: { listing }
  });
};


export const fetchListings = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/listings'
  });
};
window.fetchListings = fetchListings;
export const fetchListing = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  });
};

export const createReview = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  });
};
