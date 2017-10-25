import * as React from 'react';

import { TrackInfoProps } from '../../types/components/tracks';

import './styles.css';

const TrackAlbumCover: React.StatelessComponent<TrackInfoProps> = ({ album }) =>
    <img className="Track-album-cover" src={album.cover} />;

export default TrackAlbumCover;
