import { SEARCH_TRACKS_SUCCESSFUL } from '../search/constants';
import { SearchTracksSuccessfulAction } from '../search/types';
import {
    Track,
    TracksAction,
    TracksState,
} from './types';

import { trackFromPayload } from './helpers';

const initialState: TracksState = {
    trackList: [] as Track[],
    selectedTrack: null,
};

export default function tracksReducer(state: TracksState = initialState, action: TracksAction): TracksState {
    switch (action.type) {
        case SEARCH_TRACKS_SUCCESSFUL:
            return {
                trackList: (<SearchTracksSuccessfulAction> action).payload.tracks.map(trackFromPayload),
                selectedTrack: null,
            };

        default:
            return state;
    }
}
