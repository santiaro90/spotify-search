import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Api from '../api';

import configureStore from '../store/configureStore';

import { login, loginSuccessfull } from './actions';
import { LOGIN_STARTED, LOGIN_SUCCESSFULL } from './constants';

import { AuthState } from './reducer';

jest.mock('../api');

describe('Auth state', () => {
    const store = configureStore();
    const mockStore = configureMockStore([thunk])({});

    afterEach(() => {
        Api.Auth.login = jest.fn();
        mockStore.clearActions();
    });

    it('starts with user not logged in', () => {
        const state = store.getState();

        expect(state.auth).toEqual({ loggedIn: false, token: '' });
    });

    it('updates when users logs in', () => {
        store.dispatch(loginSuccessfull('token'));

        const nextState: AuthState = store.getState().auth;

        expect(nextState).toEqual({
            loggedIn: true,
            token: 'token',
        });
    });

    it('logs in', async () => {
        Api.Auth.login = async () => ({ token: 'token' });

        await mockStore.dispatch(login());

        const authActions = mockStore.getActions();

        expect(authActions).toEqual([
            { type: LOGIN_STARTED },
            { type: LOGIN_SUCCESSFULL, payload: { token: 'token' } },
        ]);
    });
});
