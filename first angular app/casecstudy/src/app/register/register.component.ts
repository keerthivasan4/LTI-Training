import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userName:string;
password:string;
save(){
  localStorage.setItem("un",this.userName);
  localStorage.setItem("pwd",this.password);
  alert("Registered")
}
  constructor() {
  }

  ngOnInit(): void {
  }

}
