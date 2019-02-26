import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {
  
  id: number;
  editMode = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(param => {
        this.id = +param.get('id');
        this.editMode = param.get('id') !== null;
        console.log(this.editMode)
      })
  }

}
