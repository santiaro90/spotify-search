import { Track } from '../../types/state/tracks';

export type TrackInfoProps = Track;

export type TrackItemProps = {
    onClick: () => void;
    track: Track;
};

export type TrackListProps = {
    onSelectTrack: (id: string) => void;
    tracks: Track[];
};

export type TracksProps = {
    selectTrack: (id: string) => void;
    tracks: Track[];
};
