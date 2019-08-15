import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipe-book.model";
// import { RecipeBookService } from '../../recipe-book.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: "app-recipe-book-item",
  templateUrl: "./recipe-book-item.component.html",
  styleUrls: ["./recipe-book-item.component.css"]
})
export class RecipeBookItemComponent implements OnInit {
  // 從recipe-book-list那裏傳資料過來這裡，將資料類型明確地定義成Recipe
  @Input() recipe: Recipe;
  @Input() index:number;

  // 這裡的東西也是html用的東西
  // @Output() itemClicked = new EventEmitter<Recipe>();
  // private recipebookService:RecipeBookService
  constructor() {
    // console.log(this.recipe); recipe-book-item.component
  }
  // 從recipe-list那裡拿recipe對應的index過來
  ngOnInit() {}
  // _itemClicked自己內部，可以隨便取名字
  // _itemClicked() {
  // //   this.itemClicked.emit(this.recipe);
  // //   // console.log(this.recipe);
  //   this.recipebookService.recipeSelected.emit(this.recipe);
  // }

  
}
