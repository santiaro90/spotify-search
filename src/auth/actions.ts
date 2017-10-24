import {
    LOGIN_FAILED,
    LOGIN_SUCCESSFULL,
} from './constants';

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

export type AuthAction = LoginSuccessfullAction | LoginFailedAction;

export const loginSuccessfull = (token: string): LoginSuccessfullAction => ({
    type: LOGIN_SUCCESSFULL,
    payload: { token },
});

export const loginFailed = (error: string): LoginFailedAction => ({
    type: LOGIN_FAILED,
    payload: { error },
});
