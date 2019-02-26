import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService {

    ingredientsChange = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', '5'),
        new Ingredient('Tomatos', '8')
    ];
    
    getIngredients(){
        return this.ingredients.slice();
    }

    addToIngredients(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChange.next(this.ingredients.slice());
    }

    removeIngredients(){
      let num = this.ingredients.length -1
      this.ingredients.splice(num, 1)
      this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngredientsFromRecipeDetails(ingredient: Ingredient[]){
      // ingredient.forEach(( recipeDetailsItems ) => {
      //   this.addToIngredients(recipeDetailsItems);
      // })
      this.ingredients.push(...ingredient);
      this.ingredientsChange.next(this.ingredients.slice());
    }
}