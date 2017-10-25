import { combineReducers } from 'redux';

import { AppState } from '../types/state/store';

import auth from '../auth/reducer';
import tracks from '../tracks/reducer';

export default combineReducers<AppState>({ auth, tracks });
