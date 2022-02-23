import { Component } from "@angular/core";
import { mock_product_list } from "./mock-product-list";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'allclassification',
    templateUrl: 'allclassification.component.html',
    styleUrls: ['allclassification.component.css']
    
})
export class AllClassificationComponent{
    products: ProductItemModel [] = [];

    constructor(){
      
        for(var product of mock_product_list){
          console.log(product);
          this.products.push(product);
        }
        console.log(this.products);
      }
}