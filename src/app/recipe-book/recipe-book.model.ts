import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    //讓下面傳的參數可以被其他檔案用到這筆資料!
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients: Ingredient[];
    //可以用我來創建新物件喔!
    constructor(name:string,description:string,imagePath:string,ingredients:Ingredient[]){
        // 把上面傳進來的參數對到這個元素的property(的記憶體裡面)
        //這些property就會是上面的傳進來的參數
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}