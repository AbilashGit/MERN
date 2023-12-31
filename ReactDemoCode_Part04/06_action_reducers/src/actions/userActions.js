import * as actionTypes from './actionTypes';

let currentID = 0;
export function addUser(user) { // Action creator function
  return {
    type: actionTypes.ADD_USER,
    id: currentID++,
    name: user.name,
    location: user.location
  };
}
