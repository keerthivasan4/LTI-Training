import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  //clr:string="blue";
name:string;
pass:string;
msg:string=" ";
validate(){
  if(this.name=="admin" && this.pass=="admin"){
    this.msg="Success";
  }
  else{
    this.msg="Failed";
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
