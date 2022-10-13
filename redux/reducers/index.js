// Modulo 39
import { combineReducers } from "redux";

import authReducer from './authReducer';

export default combineReducers({
    // state: (state) => state
    auth: authReducer
})