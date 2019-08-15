import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { ShoppingListService } from "../shopping-list.service";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  ingredientData: any[] = [];
  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit() {}

  @ViewChild("nameInput", { static: false }) nameInput: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{
    ingredientName: string;
    ingredientAmount: number;
  }>();

  ingredientName: string;
  ingredientAmount: number;
  addIngredient() {
    //   this.ingredientAdded.emit({
    //     ingredientName: this.nameInput.nativeElement.value,
    //     ingredientAmount: this.amountInput.nativeElement.value
    //     // 另一種寫法:
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    //   });
    // 新增ingredient
    this.shoppinglistService.addIngredient(newIngredient);
  }
}
