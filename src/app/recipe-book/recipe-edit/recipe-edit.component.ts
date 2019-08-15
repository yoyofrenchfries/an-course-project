import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        // 有id才會開編輯模式 editMode = true
        //  Here != is required instead of !==, in order to check not only for null, but for undefined as well.
        this.editMode = params['id'] != null; //params['id'] != null符合條件會回傳true
        console.log(this.editMode);
      }
    )
  }

}
