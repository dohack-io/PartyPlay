import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  partyplayID = new FormControl('', [Validators.required, Validators.pattern(new RegExp(/^([1-9])([0-9]{4})$/))]);

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.partyplayID.hasError('required') ? 'You must enter a value' :
      this.partyplayID.hasError('pattern') ? 'You must enter a valid ID' : '';
  }

}
