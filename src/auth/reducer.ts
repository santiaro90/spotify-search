import { LOGIN_SUCCESSFUL } from './constants';
import { AuthAction, AuthState, LoginSuccessfulAction } from './types';

const initialState: AuthState = {
    loggedIn: false,
    token: '',
};

export default function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            return {
                loggedIn: true,
                token: (<LoginSuccessfulAction> action).payload.token
            };

        default:
            return state;
    }
}
