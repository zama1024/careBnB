import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ListingsReducer from './listing_reducer';
import ReviewReducer from './review_reducer';
import BookingReducer from './booking_reducer';
import SearchParamsReducer from './searchParams_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  listings: ListingsReducer,
  reviews: ReviewReducer,
  bookings: BookingReducer,
  searchParams: SearchParamsReducer
});

export default rootReducer;
