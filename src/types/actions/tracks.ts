import { SearchTracksSuccessfulAction } from '../actions/search';

export type SelectTrackAction = {
    type: string;
    payload: {
        id: string;
    };
};

export type TracksAction =
    SearchTracksSuccessfulAction |
    SelectTrackAction;
