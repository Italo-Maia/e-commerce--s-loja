// Modulo 39
import { combineReducers } from "redux";

import authReducer from './authReducers';

export default combineReducers({
    // state: (state) => state
    auth: authReducer
})