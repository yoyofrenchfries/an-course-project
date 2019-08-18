import { Component, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  // private ingredients: Ingredient[] = [
  //   new Ingredient("Cat OREO", 1),
  //   new Ingredient("cream", 100)
  // ];

  // 因為ingredients前面加了private所以係在沒辦法直接從這裡拿到
  // ingredients: Ingredient[] = this.shoppinglistService.ingredients;
  ingredients: Ingredient[];
  private subscription:Subscription;
  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    // 從service那裏取得改變的資料，讓shoppinglist知道有資料被更新進來了(因為shoppinglist要顯示相關的資料)
    // ingredientsChanged是一個EventEmitter，傳一整個陣列出來
    // 這裡改成next之後也不用改變，因為emit和next的syntax一樣所以大致上都不用改
    // 不過因為在結束component之前要清一些資料，所以把下面的subscribe存進subscription
    this.subscription = this.shoppinglistService.ingredientsChanged.subscribe(
      //有更新要通知我喔!
      (ingredients: Ingredient[]) => {
        // ingredients:Ingredient[]:傳過來的資料
        this.ingredients = ingredients; // 把這裡原本的資料更新成傳過來的資料
        console.log(this.ingredients); //this.ingredients:原本這裡的資料
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  //存使用者在edit那裏輸入的內容
  //   ingredientData = [];
  //從shopping-list-edit那裏傳東西過來 $event就是output到這裡的資料
  //跟ingredient說一下，我要傳進來的資料是我接受到的資料($event)的其中的東西
  //   把傳進來的資料也加到上面的ingredients裡面
  // ingredientAdded1($event) {
  //   this.ingredients.push({
  //     name: $event.ingredientName,
  //     amount: $event.ingredientAmount
  //   });
  // }
}
