import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee'

@Component({
  selector: 'app-view-all-employee',
  templateUrl: './view-all-employee.component.html',
  styleUrls: ['./view-all-employee.component.css']
})
export class ViewAllEmployeeComponent implements OnInit {
listEmployee:Employee[]
  constructor() {
      this.listEmployee=[
        {"employeeId":1000,"employeeName":"Thomas","employeeDesignation":"Head","employeeSalary":223000,"employeeJoinDate":new Date(1980,8,25)},
        {"employeeId":1001,"employeeName":"Arthur","employeeDesignation":"Manager","employeeSalary":123000,"employeeJoinDate":new Date(1975,10,30)},
        {"employeeId":1002,"employeeName":"Jhon","employeeDesignation":"Executive Manager","employeeSalary":83000,"employeeJoinDate":new Date(1989,8,9)},
        {"employeeId":1003,"employeeName":"Polly","employeeDesignation":"Advisor","employeeSalary":133000,"employeeJoinDate":new Date(1960,5,5)},
      ];
   }

  ngOnInit(): void {
  }

}
