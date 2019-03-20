import { RecipesService } from 'src/app/services/recipes.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      })
  }

  // private initForm(){

  //   this.recipeForm = this.fb.group({
  //     nameInput : [null]

  //   })

  // }

}
