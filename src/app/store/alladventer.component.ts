import { Component, Input } from "@angular/core";
import { allclassificationmodel } from "./allclassification.model";
import { mock_product_list } from "./mock-product-list";
import { mockclassification_item } from "./mockclassification-item";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'alladventer',
    templateUrl: 'alladventer.component.html',
    
    
})
export class alladventer{
    @Input()img: string;
    @Input()price:string;
    @Input()title:string;
    @Input()description:string;


constructor() {
    this.img="";
    this.price= "0.00";
    this.title="Missing title";
    this.description="Missing describtion";
}
}