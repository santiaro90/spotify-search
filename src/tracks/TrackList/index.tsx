import * as React from 'react';

import TrackItem from '../TrackItem';

import { Track } from '../types';

import './styles.css';

type TrackListProps = {
    tracks: Track[];
};

const TrackList: React.StatelessComponent<TrackListProps> = ({ tracks }) => (
    tracks.length ? (
        <div className="TrackList">
            <div className="TrackList-header">
                <div className="TrackList-header-item">Artist</div>
                <div className="TrackList-header-item">Track</div>
                <div className="TrackList-header-item">Album</div>
            </div>
            <div className="TrackList-content">
                {tracks.map((t: Track) => <TrackItem key={t.id} track={t} />)}
            </div>
        </div>
    ) : null
);

export default TrackList;
