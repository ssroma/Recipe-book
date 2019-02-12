import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() generateIngredient = new EventEmitter<Ingredient>();
  @Output() removeIngradient = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  addIngredients( ){
    let ingName = this.nameInputRef.nativeElement.value;
    let ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient( ingName, ingAmount );
    this.generateIngredient.emit(newIngredient)
    ingName = "";
    ingAmount = "";
  }

  removeIngredients(){
    this.removeIngradient.emit();
  }

}
