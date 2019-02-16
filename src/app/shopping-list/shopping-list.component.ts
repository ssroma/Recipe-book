import { ShoppingListService } from './../services/shoppingList.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[];

  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientsChange
      .subscribe( ( ingredientFromEvent: Ingredient[] ) => {
        this.ingredients = ingredientFromEvent;
      })
  }


}
