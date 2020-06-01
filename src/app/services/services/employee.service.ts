import { Injectable } from '@angular/core';
import { Employee } from '../../entity/Employee'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   constructor(private http: HttpClient) { }
    url:string='http://dummy.restapiexample.com/api/v1/employees';
    addUrl:string='http://dummy.restapiexample.com/api/v1/create';
   baseUrl: string = environment.baseUrl;
  // In-memory list of employees
  allEmployees:Employee[] = [
    {
      "id": "1",
      "firstname": "Aishwarya",
      "lastname": "Shrimali",
      "age": 26,
      "designation": "Software eng"
    }
  ];

   // Returns all the employees
  getAllEmployees() {
    return this.http.get(this.url);
  }
  
   // Adds an employee to employee list
   addEmployee(employee){
    return this.http.post<any>(this.addUrl,employee);
  }
 

  // Update employee details
  updateEmployee(employee:Employee){
    var updateEmployee = this.allEmployees.find(emp => emp.id == employee.id);
    updateEmployee.firstname = employee.firstname;
    updateEmployee.lastname = employee.lastname;
    updateEmployee.age = employee.age;
    updateEmployee.designation = employee.designation;
  }

  // Deletes an employee from employee list
  deleteEmployee(id:string){
    this.allEmployees = this.allEmployees.filter(employee => employee.id != id);
  }

  // Returns an employee with passed employee id from employee list
  getEmployee(id:string):Employee{
    return this.allEmployees.find(emp => emp.id == id);
  }

}
