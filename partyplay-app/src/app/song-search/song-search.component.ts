import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.scss']
})
export class SongSearchComponent implements OnInit {

  songs: Observable<any>;

  constructor(private songService: SongService) { }

  search(term: string): void {
    this.songService.searchSongs(term).pipe(
      map(jsonFile => this.songs = jsonFile && jsonFile.tracks && jsonFile.tracks.items)
    ).subscribe(() => {
      console.log(this.songs);
    });
  }

  ngOnInit() {
  }

  clearInput(searchBox) {
    searchBox.value = '';
    // find better
    this.search(searchBox.value);
  }
}

