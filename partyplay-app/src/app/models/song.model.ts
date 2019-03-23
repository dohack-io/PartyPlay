export class Song {
    device: {
        id: string,
        is_active: boolean,
        is_private_session: boolean,
        is_restricted: boolean,
        name: string,
        type: string,
        volume_percent: 0
    };
    shuffle_state: boolean;
    repeat_state: string;
    timestamp: number;
    context: any;
    progress_ms: number;
    item: {
        album: {
            album_type: string;
            artists: [
                {
                    external_urls: {
                        spotify: string;
                    },
                    href: string;
                    id: string;
                    name: string;
                    type: string;
                    uri: string;
                }
            ];
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            images: [
                {
                    height: number;
                    url: string;
                    width: number;
                }
            ];
            name: string;
            release_date: string;
            release_date_precision: string;
            total_tracks: number;
            type: string;
            uri: string;
        };
        artists: [
            {
                external_urls: {
                    spotify: string;
                },
                href: string;
                id: string;
                name: string;
                type: string;
                uri: string;
            }
        ],
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_ids: {
            isrc: string;
        };
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        is_local: boolean;
        is_playable: boolean;
        name: string;
        popularity: number;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
    };
    currently_playing_type: string;
    actions: {
        disallows: {
            resuming: boolean
        }
    };
    is_playing: boolean;
}
