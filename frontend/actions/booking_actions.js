import * as APIUtil from "../util/booking_api_util";

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const CLEAR_BOOKING_ERRORS = "CLEAR_BOOKING_ERRORS";
export const DELETE_BOOKING = "DELETE_BOOKING";

export function receiveBookings(bookings) {
  return {
    type: RECEIVE_BOOKINGS,
    bookings,
  };
}

export function receiveErrors(errors) {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors,
  };
}

export function clearBookingErrors() {
  return {
    type: CLEAR_BOOKING_ERRORS,
  };
}

export function fetchBookings() {
  return (dispatch) => {
    return APIUtil.fetchBookings()
      .then((bookings) => dispatch(receiveBookings(bookings)));
  };

}

export function createBooking(booking) {
  return (dispatch) => {
    return APIUtil.createBooking(booking)
      .then((bookings) => {
        return dispatch(receiveBookings(bookings));
      },
      err => {
        return dispatch(receiveErrors(err.responseJSON));
      });
  };
}

export function deleteBooking(id) {
  return (dispatch) => {
    return APIUtil.deleteBooking(id)
      .then((bookings) => dispatch(receiveBookings(bookings)));
  };
}
