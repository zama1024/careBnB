import * as APIUtil from '../util/review_api_util';
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

export function receiveReviews(reviews) {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  };
}

export function receiveReview(review) {
  return {
    type: RECEIVE_REVIEW,
    review,
  };
}

export function receiveReviewErrors(errors) {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors,
  };
}

export function clearReviewErrors() {
  return {
    type: CLEAR_REVIEW_ERRORS,
  };
}

export function fetchReviews(listingId) {
  return (dispatch) => {
    return APIUtil.fetchReviews(listingId)
      .then((reviews) => dispatch(receiveReviews(reviews)));
  };
}

export function createReview(review) {
  return dispatch => {
    return APIUtil.createReview(review)
      .then((reviews) => dispatch(receiveReviews(reviews)),
      err => {
        return dispatch(receiveReviewErrors(err.responseJSON));
      });
  };
}
export function updateReview(review) {
  return dispatch => {
    return APIUtil.updateReview(review)
      .then((review) => dispatch(receiveReview(review)),
      err => {
        return dispatch(receiveReviewErrors(err.responseJSON));
      });
  };
}
