import * as React from 'react';
import { Link } from 'react-router-dom';

import { TrackItemProps } from '../../types/components/tracks';

import './styles.css';

const TrackItem: React.StatelessComponent<TrackItemProps> = ({ onClick, track }) => (
    <div onClick={() => onClick()} className="Track">
        <Link className="Track-link" to={`/tracks/${track.id}`}>
            <div className="Track-prop">{track.artist}</div>
            <div className="Track-prop">{track.name}</div>
            <div className="Track-prop">{track.album.name}</div>
        </Link>
    </div>
);

export default TrackItem;
