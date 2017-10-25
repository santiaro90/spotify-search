export type Duration = {
    mins: number;
    secs: number;
};

export type Track = {
    id: string;
    name: string;
    album: string;
    duration: Duration;
    artist: string;
};

export type TracksState = {
    trackList: Track[];
    selectedTrack: null | Track;
};
