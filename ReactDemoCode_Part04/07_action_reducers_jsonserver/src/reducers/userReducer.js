import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.users;

    case types.ADD_USER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.user)
      ];

    case types.DELETE_USER_SUCCESS:
      let newState = state.filter(user => user.id != action.id); // ES6 arrow fns
      return newState;

    default:
      return state;
  }
}
