import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
selectedValue=3;
// val=3;
// val="brown";
  constructor() { }

  ngOnInit(): void {
  }

}
