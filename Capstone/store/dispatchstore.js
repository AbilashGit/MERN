import reducers from "../reducers/indexreducer";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const dispatchstore=createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
    );

    export default dispatchstore;
    
