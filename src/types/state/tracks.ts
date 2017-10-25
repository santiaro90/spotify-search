export type Duration = {
    mins: number;
    secs: number;
};

export type TrackAlbum = {
    name: string;
    cover: string;
};

export type Track = {
    id: string;
    name: string;
    album: TrackAlbum;
    duration: Duration;
    artist: string;
};

export type TracksState = {
    trackList: Track[];
    selectedTrack: null | Track;
};
