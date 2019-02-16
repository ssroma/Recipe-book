import { EventEmitter } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';


export class ShoppingListService {

    ingredientsChange = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', '5'),
        new Ingredient('Tomatos', '8')
    ];
    
    getIngredients(){
        return this.ingredients.slice();
    }

    addToIngredients(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChange.emit(this.ingredients.slice());
    }

    removeIngredients(){
      let num = this.ingredients.length -1
      this.ingredients.splice(num, 1)
      this.ingredientsChange.emit(this.ingredients.slice());
    }

    addIngredientsFromRecipeDetails(ingredient: Ingredient[]){
      // ingredient.forEach(( recipeDetailsItems ) => {
      //   this.addToIngredients(recipeDetailsItems);
      // })
      this.ingredients.push(...ingredient);
      this.ingredientsChange.emit(this.ingredients.slice());
    }
}