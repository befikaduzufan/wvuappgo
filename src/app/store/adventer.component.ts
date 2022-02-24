import { Component } from "@angular/core";
import { alladventermodel } from "./alladventer.model";
import { allclassificationmodel } from "./allclassification.model";
import { mock_product_list } from "./mock-product-list";
import { mockadventer_item } from "./mockadventer-item";
import { mockclassification_item } from "./mockclassification-item";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'adventer',
    templateUrl: 'adventer.component.html'
    
    
})
export class Adventer{
    products: alladventermodel [] = [];

    constructor(){
      
        for(var product of mockadventer_item){
          console.log(product);
          this.products.push(product);
        }
        console.log(this.products);
      }
}