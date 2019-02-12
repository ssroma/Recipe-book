import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  selectedOn: string = 'recipe';

  constructor() { }

  ngOnInit() {
  }

  chooseFeature(selected: string){
    this.selectedOn = selected;
    console.log(`from home : ` + this.selectedOn);
  }

}
