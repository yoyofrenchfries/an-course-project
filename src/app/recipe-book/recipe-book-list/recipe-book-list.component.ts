import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe-book.model";
import { RecipeBookService } from "../recipe-book.service";
//呼叫我創建好的model(他是一個有constructor的class)
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-recipe-book-list",
  templateUrl: "./recipe-book-list.component.html",
  styleUrls: ["./recipe-book-list.component.css"]
})
export class RecipeBookListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipebookService: RecipeBookService,
    private route:ActivatedRoute,
    private router:Router) {}
  // id:string;

  ngOnInit() {
    this.recipes = this.recipebookService.getRecipes();
    // this.id = this.route.snapshot.params['id'];
  }
  //這個名稱是要給更上面的元素使用的
  // @Output() myitemClickeded = new EventEmitter<Recipe>();
  // loadFeature = "itemclicked!";
  // itemClickeded(recipe:Recipe){
  //   this.myitemClickeded.emit(recipe);
  //   // console.log(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
