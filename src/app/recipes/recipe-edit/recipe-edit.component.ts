import { Ingredient } from './../../shared/ingredient.model';
import { RecipesService } from 'src/app/services/recipes.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {
  
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(param => {
        this.id = +param.get('id');
        this.editMode = param.get('id') !== null;
        console.log(this.editMode);
        console.log(this.id) 
        this.initForm();
      })
      
  }

  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = this.fb.array([]) //new FormArray([]);

    if( this.editMode ){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      
      if( recipe['ingredients'] ){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            this.fb.group({
              name: [ingredient.name, Validators.required],
              amount: [ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[0-9][A-Za-z0-9 -]*$/)
              ]]
            })
          )
        }
      }

    }

    this.recipeForm = this.fb.group({
      nameInput : [recipeName, Validators.required],
      imageInput: [recipeImagePath, Validators.required],
      descriptionInput: [recipeDescription, Validators.required],

      ingredients: recipeIngredients

    })
  }

  get nameInput(){
    return this.recipeForm.get('nameInput');
  }
  get imageInput(){
    return this.recipeForm.get('imageInput');
  }
  get descriptionInput(){
    return this.recipeForm.get('descriptionInput');
  }

  get ingredients(){
    return (<FormArray>this.recipeForm.get('ingredients')) // as FormArray;
  }

  onAddIngredients(){
    this.ingredients.push(
      this.fb.group({
        name: [null, Validators.required],
        amount: [null, [
          Validators.required,
          Validators.pattern(/^[0-9][A-Za-z0-9 -]*$/)
        ]]
      })
    )
  }


  onSubmit(){
    const newRecipe = new Recipe(
      this.nameInput.value,
      this.descriptionInput.value,
      this.imageInput.value,
      this.ingredients.value
    );
    if (this.editMode){
      this.recipeService.updateRecipe(this.id, newRecipe);
    }else{
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
    //this.router.navigate( [''], {relativeTo: this.route});
  }

  onCancel(){
    this.router.navigate( ['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number){
    //(<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    this.ingredients.removeAt(index);
  }

}
