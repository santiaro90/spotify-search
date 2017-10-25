import { TrackResponse } from '../api/types';
import { Duration, Track } from './types';

export const millisecondsToDuration = (ms: number): Duration => {
    const totalSeconds = Math.floor(ms / 1000);
    return { mins: Math.floor(totalSeconds / 60), secs: totalSeconds % 60 };
};

export const trackFromPayload = (track: TrackResponse): Track => ({
    id: track.id,
    name: track.name,
    album: track.album.name,
    artist: track.artists[0].name,
    duration: millisecondsToDuration(track.duration_ms),
});
