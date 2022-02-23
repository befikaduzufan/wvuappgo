import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseProgramComponenet } from './store/courseprogram.component';
import { HomeLayoutComponenet } from './store/home-layout.component';
import { AllClassificationComponent } from './store/allclassification.component';
const routes:Routes =[
  {path: '',component: CourseProgramComponenet},
  {path: 'course-program',component: CourseProgramComponenet},
  {path: 'home',component: HomeLayoutComponenet},
  {path: 'All Classifications',component: AllClassificationComponent},
  

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
