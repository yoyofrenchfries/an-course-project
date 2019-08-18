// import {EventEmitter} from '@angular/core';
import { Recipe } from "./recipe-book.model";
import {Ingredient} from '../shared/ingredient.model'
// import { Subject } from 'rxjs';

// 資料的存放地和回傳地
export class RecipeBookService{
    // recipeSelected = new Subject<Recipe>();
    // private:我要保護recipes不備外面的人玩弄!哼!
    private recipes: Recipe[] = [
        //呼叫recipe model創建新的Recipe物件，要跟著model裡面的資料型態一起改
        new Recipe(
          "Cat OREO Sundae  Recipe",
          "Cat OREO is on sale!",
          "https://cdn.shopify.com/s/files/1/0344/6469/files/cat-in-food-1.jpg?v=1527024606",
          [
            new Ingredient('Cat OREO',10),
            new Ingredient('ice cream',3)
          ]
        ),
        new Recipe(
          "Healthy Cat SandWich Recipe",
          "Ingredient is sexy hot cat!It will whet your appetite",
          "https://mymodernmet.com/wp/wp-content/uploads/2018/04/cats-in-food-30.jpg",
          [
            new Ingredient('Healthy sexy hot cat',1),
            new Ingredient('toast',2),
            new Ingredient('lettuce',4),
            new Ingredient('tomato',3)
          ]
        )
    ];

    // 讓外面的東西只能拿到這裡array的複製，不能直接改到這裡面的資料
    getRecipes(){
        // slice():该方法并不会修改数组，而是返回一个子数组。
        return this.recipes.slice();
    }

    getRecipe(index:number){
      // 回傳recipes裡面對應的recipe
      return this.recipes[index];
    }

    
}