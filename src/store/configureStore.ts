import { Middleware, Store, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { AppState } from './types';

import rootReducer from './rootReducer';

export default function configureStore(): Store<AppState> {
    const middleware: [Middleware] = [thunk];

    if (process.env.NODE_ENV === 'development') {
        middleware.push(logger);
    }

    return createStore(rootReducer, applyMiddleware(...middleware));
}
