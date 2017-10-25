import * as React from 'react';

import { Track } from '../types';

import './styles.css';

type TrackItemProps = {
    track: Track;
};

const TrackItem: React.StatelessComponent<TrackItemProps> = ({ track }) => (
    <div className="Track">
        <div className="Track-prop">{track.artist}</div>
        <div className="Track-prop">{track.name}</div>
        <div className="Track-prop">{track.album}</div>
    </div>
);

export default TrackItem;
