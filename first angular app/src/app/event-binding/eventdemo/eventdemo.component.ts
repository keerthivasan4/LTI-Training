import { Component, OnInit } from '@angular/core';

@Component({ //decorator
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

name:string;//="";
count:number=0;
tcount:number=0;
info:string=" me!";
ctry:string;
printVal:string="Event Payload";
exp:string;
increment(){
  this.count++;
  this.tcount++;
}
decrement(){
  this.count--;
  this.tcount++;
}
greet(){
  this.name="World";
  this.info="ed!";
  //this.printVal=this.exp;
}
greeting(event){
  this.name=event.target.value;
}
getCountry(item:string){
  this.ctry=item;
}
print(event){
  this.printVal=event.target.value;
}
// name5:string="Five";
// msg5:string;
// greet5(){
//   this.msg5="Hello Angular";
// }
  constructor() { }

  ngOnInit(): void {
  }
}
