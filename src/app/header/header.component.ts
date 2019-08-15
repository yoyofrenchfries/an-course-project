import { Component} from "@angular/core";
// import { EventEmitter } from 'events';

@Component({
  // 必不可少selector和至少一個template
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  collapsed = true;
  recipe = true;
  shoppinglist = false;

  // @Output() recipeclicked = new EventEmitter<boolean>();
  // @Output() shoppinglistclicked = new EventEmitter<boolean>();
  // //連結被點擊之後觸發的功能
  // recipeClicked() {
  //   this.recipeclicked.emit(this.recipe);
  //   console.log(this.recipe);
  // }
  // shoppinglistClicked(){
  //   this.recipeclicked.emit(this.shoppinglist);
  //   console.log(this.shoppinglist);
  // }
}
