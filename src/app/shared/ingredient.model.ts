export class Ingredient{
    public name:string;
    public amount:number;
    constructor(name:string,amount:number){
        this.name = name;
        this.amount = amount;
    }
    //簡寫: constructor(public name:string,public amount:number){}
}