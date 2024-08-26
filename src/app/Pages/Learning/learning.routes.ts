import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { LearningComponent } from './learning/learning.component';


const routes: Routes = [
  { path: 'cursos', component: LearningComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class LearningRoutingModule { }
