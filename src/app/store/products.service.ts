import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { ProductItemModel } from "./product-item.model";
@Injectable(
    {providedIn:'root'}
)
export class productsService{
    private baseurl:string="https://wvuappgo-default-rtdb.firebaseio.com/";
    private productsEndpoint="products.json";
    constructor(private http:HttpClient){

    }
    getproducts(){
        return this.http.get<ProductItemModel[]>(this.baseurl + this.productsEndpoint)
    }
    getproduct(index:number){
        return this.http.get<ProductItemModel>(this.baseurl + 'products' + '/' + index + '.json');  
    }

}