import { LOGIN } from './urls';
import { LoginOkResponse } from './types';

export async function login(): Promise<LoginOkResponse> {
    const authResponse = await fetch(LOGIN);
    return authResponse.json();
}
