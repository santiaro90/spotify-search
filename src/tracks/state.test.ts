import Api from '../api';

import configureStore from '../store/configureStore';

import { loginSuccessful } from '../auth/actions';
import { getTracks } from '../search/actions';

import { Track } from '../types/state/tracks';
import { TrackResponse } from '../types/api/tracks';
import { TracksState } from '../types/state/tracks';

jest.mock('../api');

describe('Tracks state', () => {
    afterEach(() => {
        Api.Search.getTracks = jest.fn();
    });

    it('has an empty list of tracks by default', () => {
        const store = configureStore();
        const state: TracksState = store.getState().tracks;

        expect(state).toEqual({
            trackList: [],
            selectedTrack: null,
        });
    });

    it('sets the track list coming from a search', async () => {
        const tracks: TrackResponse[] = [
            { id: '1', name: 'a', album: { name: 'b' }, artists: [{ name: 'c' }], duration_ms: 260000 },
            { id: '2', name: 'a', album: { name: 'b' }, artists: [{ name: 'c' }], duration_ms: 180000 },
            { id: '3', name: 'a', album: { name: 'b' }, artists: [{ name: 'c' }], duration_ms: 150000 },
            { id: '4', name: 'a', album: { name: 'b' }, artists: [{ name: 'c' }], duration_ms: 453000 },
        ];

        const expectedTracks: Track[] = [
            { id: '1', name: 'a', album: 'b', artist: 'c', duration: { mins: 4, secs: 20 } },
            { id: '2', name: 'a', album: 'b', artist: 'c', duration: { mins: 3, secs: 0 } },
            { id: '3', name: 'a', album: 'b', artist: 'c', duration: { mins: 2, secs: 30 } },
            { id: '4', name: 'a', album: 'b', artist: 'c', duration: { mins: 7, secs: 33 } },
        ];

        Api.Search.getTracks = async ({}) => tracks;

        const store = configureStore();

        store.dispatch(loginSuccessful('token'));
        await store.dispatch(getTracks('abc'));

        const { trackList } = store.getState().tracks;

        expect(trackList).toEqual(expectedTracks);
    });
});
