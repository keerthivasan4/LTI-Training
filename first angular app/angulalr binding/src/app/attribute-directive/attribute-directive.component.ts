import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  template: `
    <button (click)="like()">{{t?'Dislike':'Like'}}</button>
    <span> Likes {{count}}</span>
    `,
  styles: [`
  button{
    border:none;
    background-color:white;
  }
  div
  {
    background-color:white;
    border:2px solid black;
    margin:15px
  } 
  .ngc
  {
    background-color:grey
  }
  `]
})
export class AttributeDirectiveComponent implements OnInit {
cN:string="blue";
toggle:boolean=true;
clr:string;
t:boolean=false;
count=100;
setToggle(){
  this.toggle=!this.toggle;
}
like(){
  if(this.t===false){
    this.count++;
    this.t=true;
  }
  else if(this.t===true){
    this.count--;
    this.t=false;
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
