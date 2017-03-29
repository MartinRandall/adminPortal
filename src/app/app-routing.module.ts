import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SampleContentComponent} from './sample-content/sample-content.component';
import {Sample2Component} from "./sample-content/sample2-component";

const routes: Routes = [
  {
    path: '',
    component: SampleContentComponent,
    children: []
  },
  {
    path: 'test',
    component: SampleContentComponent,
    children: []
  },
  {
    path: 'test2',
    component: Sample2Component,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
