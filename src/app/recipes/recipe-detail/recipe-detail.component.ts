import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/services/recipes.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {

  @Input('detailedItem') detailItem: Recipe;

  constructor( private recipeService: RecipesService) { }

  ngOnInit() {
  }

  addToshopppingList( ){
    this.recipeService.onAddToShoppingList(this.detailItem.ingredients);
  }



}
