import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgmaterialModule } from './shared/ngmaterial/ngmaterial.module';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    NgmaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    DataTableComponent,
    EmployeeComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
