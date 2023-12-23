import {ActionTypes} from "../constants/Issueconstants.js";

export const setIssues=(issues) =>{
    return{
        type:ActionTypes.SET_ISSUES,
        payload:issues
    }
}
export const deleteIssue=(id) =>{
    return{
        type:ActionTypes.DELETE_ISSUE,
        payload:id
    }
}