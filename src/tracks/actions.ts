import { SELECT_TRACK } from './constants';
import { SelectTrackAction } from '../types/actions/tracks';

export const selectTrack = (id: string): SelectTrackAction => ({
    type: SELECT_TRACK,
    payload: {
        id,
    },
});
