import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Api from '../api';

import configureStore from '../store/configureStore';

import { login, loginSuccessful } from './actions';
import { LOGIN_STARTED, LOGIN_SUCCESSFUL } from './constants';

import { AuthState } from '../types/state/auth';

jest.mock('../api');

describe('Auth state', () => {
    const store = configureStore();
    const mockStore = configureMockStore([thunk])({});

    afterEach(() => {
        Api.Auth.login = jest.fn();
        mockStore.clearActions();
    });

    it('starts unauthenticated', () => {
        const state: AuthState = store.getState().auth;

        expect(state).toEqual({ loggedIn: false, token: '' });
    });

    it('logs in successfully', async () => {
        Api.Auth.login = async () => ({ token: 'token' });

        await mockStore.dispatch(login());

        const authActions = mockStore.getActions();

        expect(authActions).toEqual([
            { type: LOGIN_STARTED },
            { type: LOGIN_SUCCESSFUL, payload: { token: 'token' } },
        ]);
    });

    it('sets authenticated state when login is successful', () => {
        store.dispatch(loginSuccessful('token'));

        const nextState: AuthState = store.getState().auth;

        expect(nextState).toEqual({
            loggedIn: true,
            token: 'token',
        });
    });
});
