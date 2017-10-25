import { SEARCH_TRACKS_SUCCESSFUL } from '../search/constants';
import { SELECT_TRACK } from './constants';
import { SearchTracksSuccessfulAction } from '../types/actions/search';
import { SelectTrackAction, TracksAction } from '../types/actions/tracks';
import { Track, TracksState } from '../types/state/tracks';

import { findTrack, trackFromPayload } from './helpers';

const initialState: TracksState = {
    trackList: [] as Track[],
    selectedTrack: null,
};

export default function tracksReducer(state: TracksState = initialState, action: TracksAction): TracksState {
    switch (action.type) {
        case SELECT_TRACK:
            const id = (<SelectTrackAction> action).payload.id;
            const selectedTrack = findTrack(id, state.trackList);

            return Object.assign({}, state, { selectedTrack });

        case SEARCH_TRACKS_SUCCESSFUL:
            return {
                trackList: (<SearchTracksSuccessfulAction> action).payload.tracks.map(trackFromPayload),
                selectedTrack: null,
            };

        default:
            return state;
    }
}
