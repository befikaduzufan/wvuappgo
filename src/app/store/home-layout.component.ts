import { Component } from "@angular/core";
import { mock_product_list } from "./mock-product-list";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'homelayout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
    
})
export class HomeLayoutComponenet{
    products: ProductItemModel [] = [];


    constructor(){
      
      for(var product of mock_product_list){
        console.log(product);
        this.products.push(product);
      }
      console.log(this.products);
    }
}