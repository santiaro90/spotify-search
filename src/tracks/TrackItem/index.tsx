import * as React from 'react';

import { Track } from '../types';

type TrackItemProps = {
    track: Track;
};

const TrackItem: React.StatelessComponent<TrackItemProps> = ({ track }) => (
    <tr>
        <td>{track.artist}</td>
        <td>{track.name}</td>
        <td>{track.album}</td>
    </tr>
);

export default TrackItem;
