import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HorizontalCardComponent } from './horizontal.card.component';

describe('horizontalcardComponent', () => {
  let component: HorizontalCardComponent;
  let fixture: ComponentFixture<HorizontalCardComponent >;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedhorizontalprice:string="My price";
  let expecteddescription:string="my description";
  let expectedimg:string="";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [HorizontalCardComponent ]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalCardComponent );
    component = fixture.componentInstance;
    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;
    component.price="My price";
    component.description="my description";
    component.img="";
   

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('should  display horizontalcard price', () => {
      
    expect(cardEl.textContent).toContain(expectedhorizontalprice);
  });
  it('should  display horizontalcard description', () => {
      
    expect(cardEl.textContent).toContain(expecteddescription);
  });
  it('should  display horizontalcard img', () => {
      
    expect(cardEl.textContent).toContain(expectedimg);
  });
  
  
});

describe('HorizontalCardComponent (minimal)', () => {
  it('should create', () => {
    TestBed.configureTestingModule({declarations: [HorizontalCardComponent]});
    const fixture = TestBed.createComponent(HorizontalCardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});

@Component({
  selector: 'lightswitch-comp',
  template: `
    <button type="button" (click)="clicked()">Click me!</button>
    <span>{{message}}</span>`
})
export class LightswitchComponent {
  isOn = false;
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}

