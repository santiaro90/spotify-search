import * as React from 'react';
import { shallow } from 'enzyme';

import TrackList from './TrackList';
import { Tracks as TracksComponent } from './';

describe('Tracks component', () => {
    const tracks = [{
        id: '1',
        name: 'a',
        album: { name: 'b', cover: 'url' },
        duration: { mins: 1, secs: 20 },
        artist: 'c',
    }];

    it('shows a list of tracks', () => {
        const wrapper = shallow(
            <TracksComponent tracks={tracks} selectTrack={jest.fn()} />
        );

        const list = wrapper.find(TrackList);

        expect(list).toHaveLength(1);
    });

    it('shows a message if there are no tracks', () => {
        const wrapper = shallow(
            <TracksComponent tracks={[]} selectTrack={jest.fn()} />
        );

        expect(wrapper.text()).toContain('No results found.');
    });
});
