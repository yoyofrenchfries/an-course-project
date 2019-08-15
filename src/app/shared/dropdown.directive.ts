import {Directive, HostBinding, HostListener,ElementRef} from '@angular/core';

// directive:在html上面作用
@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    // 先把要做甚麼事情寫好在這裡，在把這個東西加到我要加的地方就好，超方便!
    // @HoatBinding好像是設定要在哪個元素上要加甚麼(例如叫做open的class)，
    //另外設定這個directive的資料，預設布林值是false(預設還沒有加)
    @HostBinding("class.open") isOpen:boolean = false;
    //在那個被加directive的html元素上，只要這個元素被按就切換他的布林值
    // @HostListener("click") toggleOpen(event:Event){
    //     // 按一下切換布林值，這個布林值已經被設定在directive所在的那一頁了
    //     this.isOpen = !this.isOpen;
    // }
    // 旁邊按一下就可以直接關掉視窗的寫法
    @HostListener("document:click",['$event']) toggleOpen(event:Event){
        // 按一下切換布林值，這個布林值已經被設定在directive所在的那一頁了

        // 如果現在點到的地方包含了我要讓選單展開的那個目標元素的話就把open加上去，不然就直接把選單關掉(把open拿走)
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        //console.log(event.target); //現在點到的地方
        //console.log(this.elRef); //nativeElement: li.dropdown.open
    }
    constructor(private elRef:ElementRef){}
}