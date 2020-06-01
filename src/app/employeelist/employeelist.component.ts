import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  allEmployees: any;
 
  // Service injected in constructor
  constructor(private employeeService:EmployeeService, private router: Router) { }

  // Initializes all employees list from employee service
  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((res: any) => {
      this.allEmployees= res.data;
    });
  }

  // Method to add an employee to the list
  addEmployee(){
    this.router.navigate(["AddEmployee"]);
  }

  // Method to refresh the employee list after successful delete
  refreshList(){
    this.allEmployees = this.employeeService.getAllEmployees();
  }

}
