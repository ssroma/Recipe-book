import { RecipesService } from '../../services/recipes.services';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes =  this.recipesService.getRecipes();
  }

}
