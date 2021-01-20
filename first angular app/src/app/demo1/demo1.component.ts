import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  template: '<h1>hello world {{n}}</h1>',
  styles: ['h1{color:red;}']
})
export class Demo1Component implements OnInit {
n:string="Computer";
  constructor() { }

  ngOnInit(): void {
  }

}
