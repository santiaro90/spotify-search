import { AuthState } from './reducer';

import configureStore from '../store/configureStore';

import { loginFailed, loginSuccessfull } from './actions';

describe('Auth state', () => {
    const store = configureStore();

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

    it('does nothing when login fails', () => {
        store.dispatch(loginFailed('error'));

        const nextState: AuthState = store.getState().auth;

        expect(nextState).toEqual({
            loggedIn: false,
            token: '',
        });
    });
});
