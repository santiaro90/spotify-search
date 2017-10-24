import {
    AuthAction,
    LoginSuccessfullAction,
} from './actions';

import {
    LOGIN_FAILED,
    LOGIN_SUCCESSFULL,
} from './constants';

export type AuthState = {
    loggedIn: boolean;
    token: string;
};

const initialState: AuthState = {
    loggedIn: false,
    token: '',
};

export default function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case LOGIN_FAILED:
            return initialState;
        case LOGIN_SUCCESSFULL:
            return {
                loggedIn: true,
                token: (<LoginSuccessfullAction> action).payload.token
            };
        default:
            return state;
    }
}
