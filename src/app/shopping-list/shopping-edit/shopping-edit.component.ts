import { ShoppingListService } from './../../services/shoppingList.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredients( ){
    let ingName = this.nameInputRef.nativeElement.value;
    let ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient( ingName, ingAmount );
    this.shoppingListService.addToIngredients(newIngredient);
    ingName = "";
    ingAmount = "";
  }

  removeIngredients(){
    this.shoppingListService.removeIngredients();
  }

}
