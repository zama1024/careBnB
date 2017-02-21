import { RECEIVE_REVIEW, RECEIVE_REVIEWS, RECEIVE_REVIEW_ERRORS, CLEAR_REVIEW_ERRORS } from '../actions/review_actions';
const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState =  Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      newState = action.reviews;
      newState.errors = [];
      return newState;
    case RECEIVE_REVIEW:
    debugger
      return Object.assign({}, state, { [action.review.id]: action.review });
    case RECEIVE_REVIEW_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_REVIEW_ERRORS:
      newState.errors= [];
      return newState;
    default:
      return state;

  }
};


export default reviewReducer;
