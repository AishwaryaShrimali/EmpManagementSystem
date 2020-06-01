import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
// import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import {InputTextModule} from 'primeng/inputtext';
import { EmployeeService } from './services/services/employee.service';
// import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





  // {
  //   path: 'employee',
  //   loadChildren: "./features/employee/employee.module#EmployeeModule"
  // },



@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeedetailComponent,
    AddemployeeComponent,
    EditemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    CommonModule,

    // DropdownModule,
    PanelModule,
    CardModule,
//  CdkVirtualScrollViewport ,
HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
