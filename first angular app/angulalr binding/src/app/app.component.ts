import { Component } from '@angular/core';
// import { Student } from './Models/student'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Binding';
  
  
  name:string="Henry";
  age:number=22;
  city:string="Chennai";
  count:number=100;
  arr:number[]=[1,2,3,4];
  str:string[]=["tony","stark","lisa","ann"];
  
}
