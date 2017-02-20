export const createReview = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  });
};
export const fetchReviews = (listingId) => {
  return $.ajax({
    method: "GET",
    url: "/api/reviews",
    data: { listingId },
  });
};

export const updateReview = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: 'api/reviews',
    data
  });
};
