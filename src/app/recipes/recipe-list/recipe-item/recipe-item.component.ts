import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model'
import { RecipesService } from '../../../services/recipes.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {

  @Input('itemRecipe') recipe: Recipe;

  constructor( private recipeService: RecipesService ){ }

  ngOnInit() {
  }

  sendToDetails( ){
    this.recipeService.sentToDetails.emit(this.recipe);
    //console.log( this.recipe );
  }

}
