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
import { AllClassificationComponent } from './store/allclassification.component';
import { ClassificationLayout } from './store/classificationlayout.component';

import {HttpClientModule} from '@angular/common/http';
import { alladventer } from './store/alladventer.component';
import { Adventer } from './store/adventer.component';




@NgModule({
  declarations: [
    AppComponent,
    
    TopNavBarComponenet,
    SideBarComponenet,
    CategoryCardComponent,
    CategoryHeaderComponent,
    HorizontalCardComponent,
    CourseProgramComponenet,
    HomeLayoutComponenet,
    AllClassificationComponent,
    ClassificationLayout,
    alladventer,
    Adventer
    
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
