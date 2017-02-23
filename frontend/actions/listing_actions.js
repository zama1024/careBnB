import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

// export const createReview = review => dispatch => (
//   APIUtil.createReview(review)
//     .then(review => dispatch(receiveReview(review)))
// );

export const fetchListings = listings => dispatch => (
  APIUtil.fetchListings(listings)
    .then(listings => dispatch(receiveListings(listings)))
);




export const fetchListing = id => dispatch => (
  APIUtil.fetchListing(id)
    .then(listing => dispatch(receiveListing(listing)))
);

export const createListing = listing => dispatch => (
  APIUtil.createListing(listing)
    .then(listing => dispatch(receiveListing(listing)))
);

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

// export const receiveReview = review => ({
//   type: RECEIVE_REVIEW,
//   review
// });
