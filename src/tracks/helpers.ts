import { Duration, Track, TrackAlbum } from '../types/state/tracks';
import {
    TrackResponse,
    TrackAlbumResponse,
    TrackAlbumCoverResponse,
} from '../types/api/tracks';

const getAlbumWithCover = (album: TrackAlbumResponse): TrackAlbum => ({
    name: album.name,
    cover: getMediumImage(album.images),
});

const getMediumImage = (imgs: TrackAlbumCoverResponse[]): string =>
    (<TrackAlbumCoverResponse> imgs.find(img => img.height <= 300 && img.height > 200)).url;

const millisecondsToDuration = (ms: number): Duration => {
    const totalSeconds = Math.floor(ms / 1000);
    return { mins: Math.floor(totalSeconds / 60), secs: totalSeconds % 60 };
};

export const findTrack = (id: string, trackList: Track[]) => trackList.find((t: Track) => t.id === id);

export const trackFromPayload = (track: TrackResponse): Track => ({
    id: track.id,
    name: track.name,
    album: getAlbumWithCover(track.album),
    artist: track.artists[0].name,
    duration: millisecondsToDuration(track.duration_ms),
});
