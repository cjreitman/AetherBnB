import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

export default function (state = {}, action) {

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let user = {
        username: action.currentUser.username,
        user_id: action.currentUser.token.id };

      return Object.assign({}, state, { [action.currentUser.token.id]: user });
    case RECEIVE_USER_SIGN_IN:
      let userCurrent = {
        username: action.currentUser.username,
        user_id: action.currentUser.token.id
      };

      return Object.assign({}, state, { [action.currentUser.token.id]: userCurrent });
    default:
      return state;
  }
}