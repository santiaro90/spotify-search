export type TrackResponse = {
    id: string;
    name: string;
    duration_ms: number;
    album: { name: string };
    artists: { name: string }[];
};
