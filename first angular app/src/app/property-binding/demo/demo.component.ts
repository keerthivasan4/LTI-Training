import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
welcome:string="Property binding";
w:number=237*2;
h:number=100;
link:string="http://google.com/";
path:string="assets/1.png";
css:string="color:red";
break:string="<br>";
  constructor() { }

  ngOnInit(): void {
  }

}
