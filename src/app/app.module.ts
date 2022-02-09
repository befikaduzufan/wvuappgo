import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { CategoryHeaderComponent } from './category.header.component';

import { HorizontalCardComponent } from './store/horizontal.card.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryCardComponent,
    CategoryHeaderComponent,
    HorizontalCardComponent
  
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
