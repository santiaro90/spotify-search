import { TrackResponse } from '../api/tracks';

export type SearchTrackAction = {
    type: string;
    payload: {
        search: string;
    };
};

export type SearchTracksSuccessfulAction = {
    type: string;
    payload: {
        tracks: TrackResponse[];
    };
};
