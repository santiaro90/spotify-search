export type LoginOkResponse = {
    token: string;
};

export type TrackResponse = {
    id: string;
    name: string;
    duration_ms: number;
    album: { name: string };
    artists: { name: string }[];
};

export type TrackQuery = {
    token: string;
    search: string;
};
