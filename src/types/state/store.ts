import { AuthState } from './auth';
import { TracksState } from './tracks';

export type AppState = {
    auth: AuthState;
    tracks: TracksState;
};
