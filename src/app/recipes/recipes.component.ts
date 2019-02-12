import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
  
  recepiItem: Recipe;

  constructor() { }

  ngOnInit() {
  }

  // sendToDetails(recipeDetails: Recipe){
  //   console.log(recipeDetails);
  // }

  receivedFromListRecipe(receivedFromRecipe: Recipe){
    this.recepiItem = receivedFromRecipe;
    console.log('This is from recipe component : ' + receivedFromRecipe.name);
  }

}
