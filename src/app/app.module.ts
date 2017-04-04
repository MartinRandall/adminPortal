import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SampleContentComponent} from './sample-content/sample-content.component';
import {ShellComponent} from './shell/shell.component';
import {Sample2Component} from "./sample-content/sample2-component";
import {PanelComponent} from "./widgets/panel-component";
import {ICheckDirective} from "./widgets/icheck-directive";

@NgModule({
  declarations: [
    AppComponent,
    SampleContentComponent,
    Sample2Component,
    ShellComponent,
    PanelComponent,
    ICheckDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
