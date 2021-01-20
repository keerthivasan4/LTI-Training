import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  t=false;
  toggle(){
    this.t=!this.t;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
