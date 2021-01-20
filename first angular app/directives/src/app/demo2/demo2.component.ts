import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
// item:Employee;
list:Employee[];
flag:boolean=false;
setInfo(){
  this.flag=!this.flag;
}
  constructor() {
    this.list=[
      {"eId":1,"eName":"Qwerty","designation":"Manager","salary":10000,"joinDate":new Date(10/30/1998)},
      {"eId":2,"eName":"Asdfgh","designation":"HR-Manager","salary":12000,"joinDate":new Date(12/27/1998)},
      {"eId":3,"eName":"Zxcvbn","designation":"Sales-Manager","salary":14000,"joinDate":new Date(25/2/1999)},
    ];
   }

  ngOnInit(): void {
  }

}
