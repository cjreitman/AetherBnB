import {
  RECEIVE_BOOKING_ERRORS
} from "../actions/bookings_actions";

const _nullErrors = [];

const BookingsErrorsReducer = (state = _nullErrors, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
    
      return action.err.response.data;
    default:
      return state;
  }
};

export default BookingsErrorsReducer;
