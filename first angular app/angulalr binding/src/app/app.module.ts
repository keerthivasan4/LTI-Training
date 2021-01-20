import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { ViewallComponent } from './viewall/viewall.component';
import { ViewAllEmployeeComponent } from './view-all-employee/view-all-employee.component';
import { DemoComponent } from './property-binding/demo/demo.component';
import { EventdemoComponent } from './event-binding/eventdemo/eventdemo.component';
import { TwoWayFirstComponent } from './two-way/two-way-first/two-way-first.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { FormsModule } from '@angular/forms';
import { Formdemo1Component } from './angolar-forms/formdemo1/formdemo1.component';
import { Formdemo2Component } from './angolar-forms/formdemo2/formdemo2.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ViewallComponent,
    ViewAllEmployeeComponent,
    DemoComponent,
    EventdemoComponent,
    TwoWayFirstComponent,
    AttributeDirectiveComponent,
    Formdemo1Component,
    Formdemo2Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
  // bootstrap: [TwoWayBindingComponent]
  // bootstrap: [ViewComponent]
  // bootstrap: [DemoComponent]
})
export class AppModule { }
