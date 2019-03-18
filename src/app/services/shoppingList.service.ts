import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService {

    ingredientsChange = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', '5'),
        new Ingredient('Tomatos', '8')
    ];
    
    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
      return this.ingredients[index];
    }

    addToIngredients(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChange.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
      this.ingredients[index] = newIngredient;
      this.ingredientsChange.next(this.ingredients.slice())
    }


    removeIngredients(index: number){
      // let num = this.ingredients.length -1
      // this.ingredients.splice(num, 1)
      this.ingredients.splice(index, 1);
      this.ingredientsChange.next(this.ingredients.slice())
    }

    addIngredientsFromRecipeDetails(ingredient: Ingredient[]){
      // ingredient.forEach(( recipeDetailsItems ) => {
      //   this.addToIngredients(recipeDetailsItems);
      // })
      this.ingredients.push(...ingredient);
      this.ingredientsChange.next(this.ingredients.slice());
    }
}