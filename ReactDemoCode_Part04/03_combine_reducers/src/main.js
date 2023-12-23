import {createStore, combineReducers} from 'redux';

function users(state=[], action) {
  switch (action.type) {
    case 'ADD_USER':  // immutable way of add
      return [
          ...state,
          {
            id: action.id,
            name: action.name,
            location: action.location
          }
        ];
    default:
      return state;
  }
}

function customers(state=[], action) {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return [
          ...state,
          {
            custid: action.custid,
            custname: action.custname,
          }
        ];
    case 'ADD_USER':
      console.log("ADD_USER from CR");
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  users,
  customers
});

var store = createStore(rootReducer);
console.log("App (Initial State) = " + JSON.stringify(store.getState(), null, 4));

store.dispatch({ type: 'ADD_USER', id: 1, name: 'Ram', location: 'Bangalore' });
console.log("App (After Add User - Ram) = " + JSON.stringify(store.getState(), null, 4));

store.dispatch({ type: 'ADD_USER', id: 2, name: 'Vinay', location: 'Chennai' });
console.log("App (After Add User - Vinay) = " + JSON.stringify(store.getState(), null, 4));

store.dispatch({ type: 'ADD_CUSTOMER', custname: 'Citibank' });
console.log("App (After Add Customer - Citibank) = " + JSON.stringify(store.getState(), null, 4));
