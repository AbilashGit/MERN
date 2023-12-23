import {createStore, applyMiddleware} from 'redux';
import {productreducer} from '../reducers/productreducer';
import thunk from 'redux-thunk';

export const store= createStore(
    productreducer,
    {},
    applyMiddleware(thunk)
  );

