import * as React from 'react';

import { TrackInfoProps } from '../../types/components/tracks';

import './styles.css';

const TrackInfo: React.StatelessComponent<TrackInfoProps> = ({ artist, name, duration }) => (
    <section className="Track-info">
        <h4 className="Track-artist">{artist}</h4>
        <h5 className="Track-name">{name}</h5>
        <h5 className="Track-duration">{duration.mins}:{duration.secs}</h5>
    </section>
);

export default TrackInfo;
