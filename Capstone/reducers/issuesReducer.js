import {ActionTypes} from '../constants/Issueconstants';
import IssuesApi from '../data/IssuesApi';
import indexreducer from './indexreducer';

const initialState={
    issues:[]
}

export const issuesReducer=(state=initialState,{type,payload}) => {
    switch(type) {
        case ActionTypes.SET_ISSUES:
            return {
                ...state,issues:payload
            };

        case ActionTypes.DELETE_ISSUE: 
        console.log("Id value",payload);
         return state;

        default:
            return state;    
    }
};