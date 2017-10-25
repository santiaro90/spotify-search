import { combineReducers } from 'redux';

import { AppState } from './types';

import auth from '../auth/reducer';
import tracks from '../tracks/reducer';

export default combineReducers<AppState>({ auth, tracks });
