import { Component, OnInit } from '@angular/core';
import {Students} from '../Models/students';
@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
item:Students;
list:Students[]=[];
flag:boolean=false;
c:string[]=["I","II","III","IV","V"]
  constructor() {
    this.item=new Students();
   }
   register(){
     this.flag=true;
     this.list.push(this.item);
     this.item=new Students();
     console.log(this.list);
   }

  ngOnInit(): void {
  }


}
