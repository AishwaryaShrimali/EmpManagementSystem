import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';


const routes: Routes = [
  { path: "", redirectTo: "Employees", pathMatch: "full" },
    {path:'Employees', component:EmployeelistComponent},
    {path:'AddEmployee', component: AddemployeeComponent },
    {path:'EditEmployee/:id', component:EditemployeeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
