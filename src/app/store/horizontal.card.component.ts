import { Component, Input } from "@angular/core";

@Component({
    selector: 'wvuappgo-horizontal-card',
    templateUrl: 'horizontal.card.component.html',
    styleUrls: ['horizontal.card.component.css'],
})
export class HorizontalCardComponent {
    @Input()img: string;
    @Input()price:number;
    @Input()description:string;


constructor() {
    this.img="";
    this.price= 0.00;
    this.description="Missing describtion";
}
}
