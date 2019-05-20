import { combineReducers } from 'redux';
import spots from './spots_reducer';
import bookings from './bookings_reducer';
import users from './users_reducer';

const EntitiesReducer = combineReducers({
  spots,
  bookings,
  users
});

export default EntitiesReducer;