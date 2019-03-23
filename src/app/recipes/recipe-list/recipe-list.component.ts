import { RecipesService } from '../../services/recipes.services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  onSubscription: Subscription; 

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onSubscription = this.recipesService.recipesChanged
      .subscribe( (recipe: Recipe[]) => {
        this.recipes = recipe;
      });
    this.recipes =  this.recipesService.getRecipes();
  }

  loadNewRecipe(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }


  ngOnDestroy(){
    this.onSubscription.unsubscribe();
  }

}
