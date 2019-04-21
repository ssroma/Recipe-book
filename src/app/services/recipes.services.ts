import { Subject } from 'rxjs';
import { ShoppingListService } from './shoppingList.service';
import { Injectable } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()

export class RecipesService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Lamb Veg', 
        'Lamb vegatables - Delicious lamb recipe.', 
        'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn',
        [
            new Ingredient( 'Lamb Chops', '2' ),
            new Ingredient( 'Tomatos', '100gms'  ),
            new Ingredient( 'Cellorry', '100gms'  ),
            new Ingredient( 'Oliver Oil', '2tbsp'  ),
        ]),
        new Recipe('Farritas Veg', 
        'Oven Vegatables Farritas (Veggan) ', 
        'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg',
        [
            new Ingredient( 'Farritas', '5' ),
            new Ingredient( 'Tomatos', '2' ),
            new Ingredient( 'Green Peppers', '1tbsp' ),
            new Ingredient( 'Aubegine', '1' ),
        ])
      ];
    
    constructor( private shoppingListService: ShoppingListService){}
    
    setRecipes(recipe: Recipe[]){
        this.recipes = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    onAddToShoppingList(ingredient: Ingredient[]){
        this.shoppingListService.addIngredientsFromRecipeDetails(ingredient);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(id: number){
        this.recipes.splice(id, 1);
        this.recipesChanged.next( this.recipes.slice());
    }

}