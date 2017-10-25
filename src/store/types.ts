import { AuthState } from '../auth/types';
import { TracksState } from '../tracks/types';

export type AppState = {
    auth: AuthState;
    tracks: TracksState;
};
