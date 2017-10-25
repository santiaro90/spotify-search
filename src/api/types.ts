export type LoginOkResponse = {
    token: string;
};

export type TrackResponse = {
    id: string;
    name: string;
    duration: number;
    album: { name: string };
    artist: { name: string };
};

export type TrackQuery = {
    token: string;
    search: string;
};
