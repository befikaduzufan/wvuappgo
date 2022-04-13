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
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddProductComponent } from './store/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';





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
    Adventer,
    UserInfoComponent,
    AddProductComponent,
    AuthenticationComponent,
   

    
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
