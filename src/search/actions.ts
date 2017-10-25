import Api from '../api';

import { SEARCH_TRACKS, SEARCH_TRACKS_SUCCESSFUL } from './constants';
import { AppState } from '../store/types';
import { SearchTrackAction } from './types';
import { TrackResponse } from '../api/types';

export const searchTracks = (search: string): SearchTrackAction => ({
    type: SEARCH_TRACKS,
    payload: { search },
});

export const searchTracksSuccessful = (tracks: TrackResponse[]) => ({
    type: SEARCH_TRACKS_SUCCESSFUL,
    payload: { tracks },
});

export const getTracks = (search: string) => async (dispatch: Function, getState: () => AppState) => {
    const token = getState().auth.token;
    const query = { token, search };

    dispatch(searchTracks(search));

    const tracksResponse: TrackResponse[] = await Api.Search.getTracks(query);

    dispatch(searchTracksSuccessful(tracksResponse));
};
