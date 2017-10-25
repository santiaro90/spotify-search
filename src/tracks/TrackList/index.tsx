import * as React from 'react';

import TrackItem from '../TrackItem';

import { Track } from '../types';

type TrackListProps = {
    tracks: Track[];
};

const TrackList: React.StatelessComponent<TrackListProps> = ({ tracks }) => (
    tracks.length ? (
        <table>
            <thead>
                <tr>
                    <th>Artist</th>
                    <th>Track</th>
                    <th>Album</th>
                </tr>
            </thead>
            <tbody>
                {tracks.map((t: Track) => <TrackItem key={t.id} track={t} />)}
            </tbody>
        </table>
    ) : null
);

export default TrackList;
