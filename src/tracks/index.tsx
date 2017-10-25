import * as React from 'react';
import { connect } from 'react-redux';

import TrackList from './TrackList';

import { AppState } from '../store/types';
import { Track } from './types';

type TracksProps = {
    tracks: Track[];
};

export class Tracks extends React.Component<TracksProps> {
    render() {
        const { tracks } = this.props;

        return tracks.length ?
            <TrackList tracks={tracks} /> :
            <h3>No results found.</h3>;
    }
}

const mapStateToProps = (state: AppState) => ({
    tracks: state.tracks.trackList,
});

export default connect(mapStateToProps)(Tracks);
