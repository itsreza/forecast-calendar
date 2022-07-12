import { combineReducers } from "redux";
import events from "./eventReducer";
const reducers = combineReducers({ events });

export default reducers;
