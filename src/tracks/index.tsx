import * as React from 'react';
import { connect } from 'react-redux';

import TrackList from './TrackList';

import { AppState } from '../types/state/store';
import { TracksProps } from '../types/components/tracks';

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
