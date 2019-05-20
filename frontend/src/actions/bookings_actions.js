import * as APIUtil from '../util/bookings_api_util';
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const RECEIVE_DELETED_BOOKING = 'RECEIVE_DELETED_BOOKING';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveDeletedBooking = booking => ({
  type: RECEIVE_DELETED_BOOKING,
  booking
});

export const receiveBookingErrors = err => ({
  type: RECEIVE_BOOKING_ERRORS,
  err
});
  

export const fetchUserBookings = user_id => dispatch => {
  return APIUtil.fetchUserBookings(user_id)
    .then(bookings => dispatch(receiveBookings(bookings)))
    .catch(err => console.log(err));
};

export const fetchSpotBookings = spot_id => dispatch => {
  return APIUtil.fetchSpotBookings(spot_id)
    .then(bookings => dispatch(receiveBookings(bookings)))
    .catch(err => console.log(err));
};

export const createBooking = data => dispatch => {
  return APIUtil.createBooking(data)
    .then(bookings => dispatch(receiveBookings(bookings)))
    .catch(err => dispatch(receiveBookingErrors(err)));
};

export const deleteBooking = id => dispatch => {
  return APIUtil.deleteBooking(id)
    .then(booking => dispatch(receiveDeletedBooking(booking)))
    .catch(err => console.log(err));
};