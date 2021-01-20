import { Component, OnInit } from '@angular/core';
import {Employee} from '../Models/employee';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
list:Employee;
items:Employee[]=[];
desig:string[]=["Manager","Hr","Employee"];
count:number=0;
flag:boolean=false;
Register(){
  console.log(this.list);
  this.items.push(this.list);
  this.list=new Employee();
  console.log(this.items);
  this.count++;
  this.flag=true;
}
  constructor() {
    this.list=new Employee();
   }
  ngOnInit(): void {
  }
}
