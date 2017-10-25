import { LOGIN } from './urls';
import { LoginOkResponse } from '../types/api/auth';

export async function login(): Promise<LoginOkResponse> {
    const authResponse = await fetch(LOGIN);
    return authResponse.json();
}
