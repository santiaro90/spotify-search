import { LOGIN_SUCCESSFUL } from './constants';
import { AuthAction, LoginSuccessfulAction } from '../types/actions/auth';
import { AuthState } from '../types/state/auth';

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
