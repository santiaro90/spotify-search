import { SearchTracksSuccessfulAction } from '../search/types';

export type Duration = {
    mins: number;
    secs: number;
};

export type SelectTrackAction = {
    type: string;
    payload: {
        track: Track;
    };
};

export type Track = {
    id: string;
    name: string;
    album: string;
    duration: Duration;
    artist: string;
};

export type TracksAction =
    SearchTracksSuccessfulAction |
    SelectTrackAction;

export type TracksState = {
    trackList: Track[];
    selectedTrack: null | Track;
};
