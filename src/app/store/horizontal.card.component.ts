import { Component, Input } from "@angular/core";

@Component({
    selector: 'wvuappgo-horizontal-card',
    templateUrl: 'horizontal.card.component.html',
    styleUrls: ['horizontal.card.component.css'],
})
export class HorizontalCardComponent {
    @Input()img: string;
    price:number;
    description:string;


constructor() {
    this.img="";
    this.price= 20.00;
    this.description="Backpacking and Camping Cooking";
}
}
