import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, interval, Observable, from, of } from 'rxjs';
import { map, concatMap, tap } from 'rxjs/operators';
import { Song } from '../models/song.model';

@Injectable()
export class SongService {

    public currentSong: BehaviorSubject<Song> = new BehaviorSubject(null);

    constructor(
        private http: HttpClient
    ) {
        // interval(5000).pipe(
        //     concatMap(() => this.http.get<Song>(`API ENDPUNKT`)),
        //     tap(x => this.currentSong.next(x))
        // ).subscribe();
    }

    public getCurrentSong(): Observable<any> {
        return of({
            device: {
                id: '20206f72b82a3849c620f2eae1052ff8ed926e22',
                is_active: true,
                is_private_session: false,
                is_restricted: false,
                name: 'MDHs MacBook Pro',
                type: 'Computer',
                volume_percent: 0
            },
            shuffle_state: false,
            repeat_state: 'off',
            timestamp: 1553372989761,
            context: null,
            progress_ms: 14218,
            item: {
                album: {
                    album_type: 'album',
                    artists: [
                        {
                            external_urls: {
                                spotify: 'https://open.spotify.com/artist/4TrraAsitQKl821DQY42cZ'
                            },
                            href: 'https://api.spotify.com/v1/artists/4TrraAsitQKl821DQY42cZ',
                            id: '4TrraAsitQKl821DQY42cZ',
                            name: 'Sigrid',
                            type: 'artist',
                            uri: 'spotify:artist:4TrraAsitQKl821DQY42cZ'
                        }
                    ],
                    external_urls: {
                        spotify: 'https://open.spotify.com/album/4OaTrPkuAYkelxCnm92njS'
                    },
                    href: 'https://api.spotify.com/v1/albums/4OaTrPkuAYkelxCnm92njS',
                    id: '4OaTrPkuAYkelxCnm92njS',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/f49410a2c1f0886a29adcefbeabf727919636c9c',
                            width: 640
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/32ca91628d9234157264c45631a2f25ac37efdd2',
                            width: 300
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/1b9fc5802bf471c6e7025b34399f9f54bc15eec3',
                            width: 64
                        }
                    ],
                    name: 'Sucker Punch',
                    release_date: '2019-03-08',
                    release_date_precision: 'day',
                    total_tracks: 12,
                    type: 'album',
                    uri: 'spotify:album:4OaTrPkuAYkelxCnm92njS'
                },
                artists: [
                    {
                        external_urls: {
                            spotify: 'https://open.spotify.com/artist/4TrraAsitQKl821DQY42cZ'
                        },
                        href: 'https://api.spotify.com/v1/artists/4TrraAsitQKl821DQY42cZ',
                        id: '4TrraAsitQKl821DQY42cZ',
                        name: 'Sigrid',
                        type: 'artist',
                        uri: 'spotify:artist:4TrraAsitQKl821DQY42cZ'
                    }
                ],
                disc_number: 1,
                duration_ms: 194323,
                explicit: true,
                external_ids: {
                    isrc: 'GBUM71803972'
                },
                external_urls: {
                    spotify: 'https://open.spotify.com/track/7FeWgVGGphXuSUu5wNeAcJ'
                },
                href: 'https://api.spotify.com/v1/tracks/7FeWgVGGphXuSUu5wNeAcJ',
                id: '7FeWgVGGphXuSUu5wNeAcJ',
                is_local: false,
                is_playable: true,
                name: 'Sucker Punch',
                popularity: 64,
                preview_url: 'https://p.scdn.co/mp3-preview/abe7a8da3a8814feb6e0c4193ec72c634208ae40?cid=774b29d4f13844c495f206cafdad9c86',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:7FeWgVGGphXuSUu5wNeAcJ'
            },
            currently_playing_type: 'track',
            actions: {
                disallows: {
                    resuming: true
                }
            },
            is_playing: true
        });
        // return this.http.get<Song>(`API ENDPUNKT`);
    }

}
