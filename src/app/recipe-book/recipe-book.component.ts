import {Component, OnInit} from '@angular/core';
import { Recipe } from './recipe-book.model';
import { RecipeBookService } from './recipe-book.service';

@Component({
    selector:'app-recipe-book',
    templateUrl:"./recipe-book.component.html",
    providers:[RecipeBookService]
})

export class RecipeBookComponent implements OnInit{
    itemSelected:Recipe;

    constructor(private recipebookService:RecipeBookService){}

    // 把選到的item就顯示他的細節的功能改寫
    // 補充:recipeSelected = new EventEmitter<Recipe>();
    ngOnInit(){
        this.recipebookService.recipeSelected
            .subscribe(
                (recipe:Recipe)=>{
                    this.itemSelected = recipe;
                    // console.log(this.itemSelected)
                }
            )
    }
    
}