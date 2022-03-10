import { Component, OnInit } from "@angular/core";
import { mock_product_list } from "./mock-product-list";
import { ProductItemModel } from "./product-item.model";
import { productsService } from "./products.service";

@Component({
  selector: 'homelayout',
  templateUrl: 'home-layout.component.html',
  styleUrls: ['home-layout.component.css']

})
export class HomeLayoutComponenet implements OnInit {

  products: ProductItemModel[] = [];


  constructor(private productService: productsService) {

    for (var product of mock_product_list) {
      console.log(product);
      this.products.push(product);
    }
    console.log(this.products);
  }
  ngOnInit(): void {
    this.productService.getproducts().subscribe((data: ProductItemModel[]) => {
      console.log("Fetching products");
      for (var product of data) {
        
        this.products.push(product);
      }

    });

  }

}