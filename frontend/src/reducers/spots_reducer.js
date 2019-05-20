import { RECEIVE_SPOTS } from '../actions/spots_actions';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots.data;
    default:
      return state;
  }
};

export default SpotsReducer;