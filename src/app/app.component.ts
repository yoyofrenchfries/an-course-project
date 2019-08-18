import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  booleans:boolean[] = [];

  // recipeclicked(recipe:boolean){
  //   this.booleans.splice(0,1);
  //   this.booleans.push(recipe);
  //   console.log(this.booleans);
  // }

  // shoppinglistclicked(shoppinglist:boolean){
  //   this.booleans.splice(0,1);
  //   this.booleans.push(shoppinglist);
  //   console.log(this.booleans);
  // }

}
