import { Component } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sciamb';
  constructor(private _location: Location) 
  {}

  backClicked() {
    this._location.back();
  }
}
