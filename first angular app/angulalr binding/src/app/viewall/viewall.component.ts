import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/student';
@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
list:Student[]
  constructor() {
    this.list=[
      {"studentID":1,"studentName":"tony",studentAge:12,"studentDOB":new Date(2020,10,10)},
      {"studentID":2,"studentName":"stay",studentAge:12,"studentDOB":new Date(2020,10,10)}
    ];
   }

  ngOnInit(): void {
  }

}
