import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe-book.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { Ingredient } from "../../shared/ingredient.model";
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: "app-recipe-book-detail",
  templateUrl: "./recipe-book-detail.component.html",
  styleUrls: ["./recipe-book-detail.component.css"]
})
export class RecipeBookDetailComponent implements OnInit {
  //這是從recipe那裏import進來的資料名稱
  @Input() recipe: Recipe;
  // 引入service
  constructor(private shoppinglistService: ShoppingListService,private route:ActivatedRoute,private recipebookService:RecipeBookService) {}
  ingredients = [];
  id:number;
  ngOnInit() {
    // this.ingredients = this.shoppinglistService.getIngredients();
    this.route.params.subscribe(
      (params:Params) => {
        // 把回傳的string轉成number
        this.id = +params['id'];
        // 使用service的方法，回傳id拿到recipes對應的資料
        this.recipe = this.recipebookService.getRecipe(this.id);
      }
    )
  }

  addIngredientsToList(ingredient: Ingredient) {
    // this.ingredients.push(this.recipe.ingredients);
    // this.ingredients.push(Ingredient); 直接是Ingredient model裡的方法
    console.log(this.recipe.ingredients);
    // 調用service方法，把東西一個一個加進去
    this.recipe.ingredients.forEach(ingredient => {
      this.shoppinglistService.addIngredient(ingredient);
    });

    // 好像不能直接這樣子寫，...要寫在push裡 push(...this.recipe.ingredients)
    // this.shoppinglistService.addIngredient(...this.recipe.ingredients);
  }
}
