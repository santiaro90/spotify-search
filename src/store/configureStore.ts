import { Store, createStore } from 'redux';

import rootReducer, { AppState } from './rootReducer';

export default function configureStore(): Store<AppState> {
    return createStore(rootReducer);
}
