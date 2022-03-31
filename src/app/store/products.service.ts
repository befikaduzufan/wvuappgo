
import { Injectable } from "@angular/core";

import { ProductItemModel } from "./product-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable(
    {providedIn:'root'}
)
export class productsService{
    
    constructor(private db:AngularFireDatabase){

    }
    public getproducts(){
     return this.db.list<ProductItemModel>("products").valueChanges();   
    }
    public getproduct(index:number){
       return this.db.list<ProductItemModel>("products", ref => ref.orderByChild("price").startAt(10)).valueChanges(); 
    }

    public addProduct(product:ProductItemModel){
        this.db.list<ProductItemModel>("products").push(product);
    }

}