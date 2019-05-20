import { RECEIVE_BOOKINGS, RECEIVE_DELETED_BOOKING } from '../actions/bookings_actions';
import { merge } from 'lodash';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings.data;
    case RECEIVE_DELETED_BOOKING:
      let newState = merge({}, state);
      delete newState[action.booking.data._id];
      return newState;
    default:
      return state;
  }
};

export default BookingsReducer;