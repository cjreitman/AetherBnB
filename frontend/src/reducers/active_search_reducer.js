import { RECEIVE_MAP_IS_ACTIVE, RECEIVE_DATE_RANGE, RECEIVE_PRICE_RANGE, RECEIVE_GUEST_COUNT, RECEIVE_SEARCH_STATUS, RECEIVE_BOUNDS, RECEIVE_LOCATION } from './../actions/search_actions';
import { merge } from 'lodash';
const google = window.google;

const defaultState = {
  active: false,
  startDate: null,
  endDate: null,
  guestCount: {
    adults: 1,
    children: 0,
    infants: 0
  },
  priceRange: {
    minValue: 0,
    maxValue: 1000
  },
  location: new google.maps.LatLng(37.79736054067749, -122.41654052893894),
  bounds: null,
  mapIsActive: false
};


const ActiveSearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATE_RANGE:
      return merge({}, state, action.dateRange);
    case RECEIVE_PRICE_RANGE:
      return merge({}, state, { priceRange: action.priceRange });
    case RECEIVE_GUEST_COUNT:
      return merge({}, state, { guestCount: action.count });
    case RECEIVE_SEARCH_STATUS:
      return merge({}, state, { active: action.active });
    case RECEIVE_BOUNDS:
      return merge({}, state, { bounds: action.bounds });
    case RECEIVE_LOCATION:
      return merge({}, state, { location: action.location });
    case RECEIVE_MAP_IS_ACTIVE:
      return merge({}, state, { mapIsActive: action.mapIsActive});
    default:
      return state;
  }
};

export default ActiveSearchReducer;

