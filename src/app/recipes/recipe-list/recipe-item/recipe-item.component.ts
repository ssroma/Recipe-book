import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.module'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {

  @Output('recipeTodetails') recipeTodetails = new EventEmitter<void>();

  @Input('itemRecipe') recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  sendToRetails(recipeToDetail: Recipe){
    this.recipeTodetails.emit();
    //console.log("Recipe Item component. " + recipeToDetail.name)
  }

}
