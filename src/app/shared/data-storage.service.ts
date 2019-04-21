import { AuthService } from './../auth/auth.service';
import { RecipesService } from './../services/recipes.services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  urlRecipe = 'https://recipebook-60168.firebaseio.com/recipes.json?auth='
  constructor(
    private http: HttpClient,
    private recipeService: RecipesService,
    private authService: AuthService
  ) { }

  storeRecipes(){
    const token = this.authService.getToken();
    return this.http.put(this.urlRecipe + token, this.recipeService.getRecipes() );
  }

  retriveRecipes(){
    const token = this.authService.getToken();
    this.http.get<Recipe[]>(this.urlRecipe + token)
      .pipe(map((response ) => {
        for(let recipe of response){
          if(!recipe['ingredients']){
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return response;
      }))
      .subscribe( (response) => {
        this.recipeService.setRecipes(response);
      })
  }


}
