import {combineReducers} from "redux";
import {issuesReducer} from "./issuesReducer";

const reducers=combineReducers({
       allIssues : issuesReducer
});

export default reducers;