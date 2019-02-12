import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  @Output('featured') featured = new EventEmitter<string>();
  //@Output('shopping') shoppingOn = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  OnSelected(selected: string){
    this.featured.emit(selected);
  }

}
