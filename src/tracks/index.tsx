import * as React from 'react';
import { connect } from 'react-redux';

import TrackList from './TrackList';

import { AppState } from '../types/state/store';
import { TracksProps } from '../types/components/tracks';

import { selectTrack } from './actions';

export class Tracks extends React.Component<TracksProps> {
    render() {
        const { tracks } = this.props;

        if (tracks.length) {
            return <TrackList onSelectTrack={(id: string) => this.props.selectTrack(id)} tracks={tracks} />;
        } else {
            return <h3>No results found.</h3>;
        }
    }
}

const mapStateToProps = (state: AppState) => ({
    tracks: state.tracks.trackList,
});

const mapDispatchToProps = (dispatch: Function) => ({
    selectTrack: (id: string) => dispatch(selectTrack(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
