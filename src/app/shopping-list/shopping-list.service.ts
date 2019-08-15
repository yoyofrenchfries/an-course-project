import { Ingredient } from "../shared/ingredient.model";
import {EventEmitter} from '@angular/core';
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("Cat OREO", 1),
    new Ingredient("cream", 100)
  ];
//   回傳複製的值
  getIngredients(){
      return this.ingredients.slice();
  }
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // 新增後再回傳一個複製的新陣列出去
    this.ingredientsChanged.emit(this.ingredients.slice());
    // console.log(this.ingredients);
  }
}
