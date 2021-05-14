import { combineReducers } from "redux";
import links from './links'
import auth from './auth'
export default combineReducers({
    links,auth
})