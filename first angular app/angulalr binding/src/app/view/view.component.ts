import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  obj:Student;
  constructor() {
    this.obj=new Student(); 
    this.obj.studentID=1;
    this.obj.studentName="Margery";
    this.obj.studentAge=20;
    this.obj.studentDOB=new Date(2020,11,7);
  }

  ngOnInit(): void {
  }

}
