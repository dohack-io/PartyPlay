import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SongService } from '../services/song.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  partyplayID = new FormControl('', [Validators.required, Validators.pattern(new RegExp(/^([1-9])([0-9]{4})$/))]);

  constructor(private songService: SongService, private router: Router, private cookie: CookieService) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.partyplayID.hasError('required') ? 'You must enter a value' :
      this.partyplayID.hasError('pattern') ? 'You must enter a valid ID' : '';
  }

  checkIfLobbyExists() {

  }



  navigateToDashboard(term: number) {
    this.songService.checkIfLobbyExists(term).subscribe((data: boolean) => {
      console.log('checkIfLobbyExists, Result:', data);
      if (data as boolean === true) {
        this.cookie.set('lobby', (term + ''));
        this.router.navigate(['../dashboard']);
      }
    });
  }

}
