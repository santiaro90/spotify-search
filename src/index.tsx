import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = configureStore();

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
