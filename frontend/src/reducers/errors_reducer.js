import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import BookingsErrorsReducer from "./bookings_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  bookings: BookingsErrorsReducer
});