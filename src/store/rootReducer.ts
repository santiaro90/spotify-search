import { combineReducers } from 'redux';

import { AppState } from './types';

import auth from '../auth/reducer';

export default combineReducers<AppState>({ auth });
