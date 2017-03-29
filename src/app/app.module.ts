import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleContentComponent } from './sample-content/sample-content.component';
import { ShellComponent } from './shell/shell.component';
import {Sample2Component} from "./sample-content/sample2-component";

@NgModule({
  declarations: [
    AppComponent,
    SampleContentComponent,
    Sample2Component,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
