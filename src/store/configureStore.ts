import { Middleware, Store, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer, { AppState } from './rootReducer';

export default function configureStore(): Store<AppState> {
    const middleware: Middleware[] = [thunk];

    if (process.env.NODE_ENV === 'dev') {
        middleware.push(logger);
    }

    return createStore(rootReducer, applyMiddleware(...middleware));
}
