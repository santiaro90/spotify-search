import Api from '../api';

import { LOGIN_STARTED, LOGIN_SUCCESSFUL } from './constants';
import { LoginOkResponse } from '../api/types';
import { LoginStartedAction, LoginSuccessfulAction } from './types';

export const loginSuccessful = (token: string): LoginSuccessfulAction => ({
    type: LOGIN_SUCCESSFUL,
    payload: { token },
});

export const loginStarted = (): LoginStartedAction => ({ type: LOGIN_STARTED });

export const login = () => async (dispatch: Function) => {
    dispatch(loginStarted());

    const authResponse: LoginOkResponse = await Api.Auth.login();

    dispatch(loginSuccessful(authResponse.token));
};
