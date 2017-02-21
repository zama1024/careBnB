import { RECEIVE_BOOKINGS, RECEIVE_BOOKING_ERRORS, CLEAR_BOOKING_ERRORS } from "../actions/booking_actions";

const _defaultState = { bookings: {}, errors: [] };

const bookingReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_BOOKING_ERRORS:
      return Object.assign({}, state, { errors: [] });
    case RECEIVE_BOOKINGS:
      return { bookings: action.bookings, errors: [] };
    case RECEIVE_BOOKING_ERRORS:
      return Object.assign({}, state, { errors: action.errors } );
    default:
      return state;
  }
};

export default bookingReducer;
