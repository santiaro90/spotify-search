import * as React from 'react';
import { connect } from 'react-redux';

import TrackInfo from './track-info';
import TrackAlbumCover from './track-album-cover';

import { AppState } from '../types/state/store';
import { TrackDetailProp } from '../types/components/track-detail';

import './styles.css';

export class Tracks extends React.Component<TrackDetailProp> {
    render() {
        return (
            <section className="Track-detail background-transparent">
                <TrackAlbumCover {...this.props.selectedTrack} />
                <TrackInfo {...this.props.selectedTrack} />
            </section>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    selectedTrack: state.tracks.selectedTrack,
});

export default connect(mapStateToProps)(Tracks);
