import * as queryString from 'query-string';

import { SEARCH_TRACKS } from './urls';
import { TrackQuery, TrackResponse } from './types';

export async function getTracks(query: TrackQuery): Promise<[TrackResponse]> {
    const search = queryString.stringify({ q: query.search });
    const options = {
        headers: {
            Authorization: `Bearer ${query.token}`
        },
    };

    const tracksResponse = await fetch(`${SEARCH_TRACKS}?${search}`, options);
    return tracksResponse.json();
}
