import { Component, OnInit, Input } from '@angular/core';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  @Input() song: any;

  @Input() state?: string;

  constructor(private songService: SongService) { }

  ngOnInit() {
  }

  addSongInTheQueue(song: any) {
    this.songService.addSongInTheQueue(song);
  }

}
