import { Component } from '@angular/core';
import { EmployeeService } from '../services/services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  name:string;
  salary:string;
  age:string;
  employee:any;
  employeeForm: FormGroup;
  // Services injected in constructor
  constructor(private employeeService: EmployeeService, private router: Router,private fb: FormBuilder) { 
  }

  ngOnInit() {
    
    this.createEmpForm();
  }

  createEmpForm() {
    this.employeeForm = this.fb.group({
      name: this.name,
      salary: this.salary,
      age:this.age,
    });
  }
 

  // Method to save an employee
  saveEmployee(){
    this.employeeService.addEmployee(this.employeeForm.value).subscribe((res: any) => {
      this.router.navigate(["Employees"]);
    });;
  
  }

}
