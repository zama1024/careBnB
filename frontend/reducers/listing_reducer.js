import { CREATE_REVIEW,
  RECEIVE_REVIEW,
  RECEIVE_LISTINGS,
  RECEIVE_LISTING } from '../actions/listing_actions';
import merge from 'lodash/merge';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      const newListing = {[action.listing.id]: action.listing};
      return merge({}, state, newListing);
    // case RECEIVE_REVIEW:
    //   const review = action.review;
    //   newState[review.listing_id].reviews.push(review)
      // return newState;
    default:
      return state;
  }
};

export default ListingsReducer;
