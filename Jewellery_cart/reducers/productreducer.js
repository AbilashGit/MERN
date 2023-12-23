import * as types from '../constants/actionTypes';

const initialState={
products:[]
}

export const productreducer=(state=initialState,{type,payload})=>{
switch(type){
    case types.SET_PRODUCTS:
        return {...state,products:payload};
    case types.ADD_PRODUCT:{
           return {
               ...state,
               product:payload
           }
        }
        case types.DELETE_PRODUCT:{
            return {
                ...state
            }
         }
         case types.EDIT_PRODUCT:{
            return {
                ...state
            }
         }
    default:
         return state;    
}
}