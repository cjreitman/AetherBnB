import * as APIUtil from '../util/spots_api_util';
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";

export const receiveSpots = spots => ({
  type: RECEIVE_SPOTS,
  spots
});

export const fetchSpots = data => dispatch => {
  return APIUtil.fetchSpots(data)
    .then(spots => dispatch(receiveSpots(spots)))
    .catch(err => console.log(err))
};

export const fetchSpot = id => dispatch => {
  
  return APIUtil.fetchSpot(id)
    .then(spot => dispatch(receiveSpots(spot)))
    .catch(err => console.log(err))
};