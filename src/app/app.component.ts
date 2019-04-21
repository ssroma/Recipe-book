import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {


  ngOnInit(){

    firebase.initializeApp(
      {
        apiKey: "AIzaSyBWGzlY7L-7BEOv58yiAe5tjDtKhzzJSKI",
        authDomain: "recipebook-60168.firebaseapp.com"
      }
    )
  }
}

