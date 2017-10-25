import * as React from 'react';

import TrackItem from '../TrackItem';

import { Track } from '../../types/state/tracks';
import { TrackListProps } from '../../types/components/tracks';

import './styles.css';

const TrackList: React.StatelessComponent<TrackListProps> = ({ onSelectTrack, tracks }) => (
    tracks.length ? (
        <div className="TrackList background-transparent">
            <div className="TrackList-header">
                <div className="TrackList-header-item">Artist</div>
                <div className="TrackList-header-item">Track</div>
                <div className="TrackList-header-item">Album</div>
            </div>
            <div className="TrackList-content">
                {tracks.map((t: Track) =>
                    <TrackItem onClick={() => onSelectTrack(t.id)} key={t.id} track={t} />)}
            </div>
        </div>
    ) : null
);

export default TrackList;
