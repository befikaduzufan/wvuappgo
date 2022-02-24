import { Component } from "@angular/core";
import { allclassificationmodel } from "./allclassification.model";
import { mock_product_list } from "./mock-product-list";
import { mockclassification_item } from "./mockclassification-item";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'classificationlayout',
    templateUrl: 'classificationlayout.component.html'
    
    
})
export class ClassificationLayout{
    products: allclassificationmodel [] = [];

    constructor(){
      
        for(var product of mockclassification_item){
          console.log(product);
          this.products.push(product);
        }
        console.log(this.products);
      }
}