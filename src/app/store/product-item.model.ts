import { title } from "process";

export class ProductItemModel{
    img:string;
    price:string;
    title:string;
    description:string;

    constructor(img:string,price:string,tittle:string, description:string) {
        this.img= img;
        this.price= price;
        this.title=title;
        this.description= description;

    }

}