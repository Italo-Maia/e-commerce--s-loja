//Modulo 39
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducer from './reducers';

export const initStore = configureStore({
    reducer
})