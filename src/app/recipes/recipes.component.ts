import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipesService } from '../services/recipes.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
  
  itemDetailed: Recipe;

  constructor( private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.sentToDetails
      .subscribe((recipeFromItem: Recipe ) => { 
        return this.itemDetailed = recipeFromItem;
      })
  }

}
