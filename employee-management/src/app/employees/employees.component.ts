import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mockemployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employee:Employee={id:0, name:"", email:"", phonenumber:0, address:""};
employees=EMPLOYEES;
  constructor() { }
  
  addEmployee(){
    if(this.employee.name.length>0 && this.employee.email.length>0  && this.employee.address.length>0  ){
      this.employee.id=this.employees.length +1;
      this.employees.push(this.employee);
      this.employee={id:0, name:"", email:"", phonenumber:12, address:""};
    }
  }

  deleteEmployee(num){
    var employeeList:Employee[]=[];
    for(var i=0;i<this.employees.length;i++)
    {
      if(this.employees[i].id!=num){
        employeeList.push(this.employees[i]);
      }
    }
  this.employees=employeeList;
  
  }
  
  ngOnInit() {
  }

}
