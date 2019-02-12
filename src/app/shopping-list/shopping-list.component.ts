import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 8)
  ];

  constructor() { }

  ngOnInit() {
  }

  addToIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  removeIngredients(arg){
    let num = this.ingredients.length -1
    this.ingredients.splice(num, 1)
  }

}
