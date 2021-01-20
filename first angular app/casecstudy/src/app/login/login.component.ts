import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
// localStorage.setItem("key",username);
// localStorage.getItem("key");
// localStorage.clear();
// {path:'/view/:key',component:componentname}
// import{ActivatedRoute} from '@angular/router';
// import { arch } from 'os';
// r:Router;
//   this.r.navigate(['/view'+this.username])
//   ar.params.subsribe(i=>this.name=i["key"])

  @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template:`<h1>hi</h1>`,
  styleUrls: ['./login.component.css'],
  styles:['color:brown']
})
export class LoginComponent implements OnInit {
userName:string;
password:string;
err:string;
n:string;
p:string;
validate(){
  this.n=localStorage.getItem("un");
  this.p=localStorage.getItem("pwd");
  console.log("Local Storage "+this.n+" "+this.p);
  console.log("Input "+this.userName+" "+this.password);
  if((this.userName==this.n && this.password==this.p)||(this.userName=="admin" && this.password=="123")){
    this.err="Valid!! Welcome "+this.userName;
    this.router.navigate(['/User/'+this.userName]);
    localStorage.clear();
  }
  else{
    this.err="Invalid?";
  }
}
  constructor(private router:Router) {
    // localStorage.setItem("un","admin"); 
   }

  ngOnInit(): void {
  }

}
