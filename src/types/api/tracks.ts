export type TrackAlbumCoverResponse = {
    url: string;
    height: number;
    width: number;
};

export type TrackAlbumResponse = {
    name: string;
    images: TrackAlbumCoverResponse[];
};

export type TrackResponse = {
    id: string;
    name: string;
    duration_ms: number;
    album: TrackAlbumResponse;
    artists: { name: string }[];
};
