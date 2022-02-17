import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { CategoryHeaderComponent } from './category.header.component';
import { SideBarComponenet } from './navigation/sidebar.component';
import { TopNavBarComponenet } from './navigation/topnavbar.component';

import { HorizontalCardComponent } from './store/horizontal.card.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseProgramComponenet } from './store/courseprogram.component';
import { HomeLayoutComponenet } from './store/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    
    TopNavBarComponenet,
    SideBarComponenet,
    CategoryCardComponent,
    CategoryHeaderComponent,
    HorizontalCardComponent,
    CourseProgramComponenet,
    HomeLayoutComponenet
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
