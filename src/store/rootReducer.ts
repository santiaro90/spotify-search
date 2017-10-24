import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth, { AuthState } from '../auth/reducer';

export type AppState = {
    auth: AuthState;
};

export default combineReducers<AppState>({ auth, routing: routerReducer });
