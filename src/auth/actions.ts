import Api from '../api';
import {
    LOGIN_FAILED,
    LOGIN_STARTED,
    LOGIN_SUCCESSFULL,
} from './constants';

type LoginStartedAction = {
    type: string;
};

export type LoginSuccessfullAction = {
    type: string;
    payload: {
        token: string;
    };
};

export type LoginFailedAction = {
    type: string;
    payload: {
        error: string;
    };
};

export type AuthAction =
    LoginStartedAction |
    LoginSuccessfullAction |
    LoginFailedAction;

export const loginSuccessfull = (token: string): LoginSuccessfullAction => ({
    type: LOGIN_SUCCESSFULL,
    payload: { token },
});

export const loginFailed = (error: string): LoginFailedAction => ({
    type: LOGIN_FAILED,
    payload: { error },
});

const loginStarted = (): LoginStartedAction => ({
    type: LOGIN_STARTED,
});

export const login = () => async (dispatch: (action: AuthAction) => void) => {
    dispatch(loginStarted());

    const { token } = await Api.Auth.login();

    dispatch(loginSuccessfull(token));
};
