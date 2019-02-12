import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a decription of the recipe', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn' ),
    new Recipe('A test Recipe 2', 'This is a decription of the recipe 2', 'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg' ),
  ];
  
  @Output('itemFromListItem') itemFromListItem = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
    
  }

  sendToDetails(recipeDetails: Recipe){
    console.log(recipeDetails);
    this.itemFromListItem.emit(recipeDetails);
  }

}
