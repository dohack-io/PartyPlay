import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  playlistQueue: any[];

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.playlistQueue = this.songService.playlistQueue;
  }

  // TODO do request to know the current state of playlist queue on the server

}
