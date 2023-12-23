import {createStore} from 'redux';

function counter(state=0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state; // original state
  }
}

const store = createStore(counter);
console.log("Counter Value (Initial) = " + store.getState());

store.dispatch({ type: 'INCREMENT'} ); // payload
console.log("Counter Value (After Increment) = " + store.getState());

store.dispatch({ type: 'DECREMENT' });
console.log("Counter Value (After Decrement) = " + store.getState());
