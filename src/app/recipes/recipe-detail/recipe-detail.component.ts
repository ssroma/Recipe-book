import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/services/recipes.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {

  detailItem: Recipe;
  id: number;

  constructor( 
    private recipeService: RecipesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe( param => {
        this.id =  +param.get('id')
        this.detailItem = this.recipeService.getRecipe(this.id);
        //console.log(this.detailItem);
      })
  }

  addToshopppingList( ){
    this.recipeService.onAddToShoppingList(this.detailItem.ingredients);
  }



}
