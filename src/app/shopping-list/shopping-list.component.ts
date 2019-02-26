import { ShoppingListService } from './../services/shoppingList.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.subscription = this.shoppingListService.ingredientsChange
      .subscribe( ( ingredientFromEvent: Ingredient[] ) => {
        this.ingredients = ingredientFromEvent;
      })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
