import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseProgramComponenet } from './store/courseprogram.component';
import { HomeLayoutComponenet } from './store/home-layout.component';
const routes:Routes =[
  {path: '',component: CourseProgramComponenet},
  {path: 'course-program',component: CourseProgramComponenet},
  {path: 'home',component: HomeLayoutComponenet}

  
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
