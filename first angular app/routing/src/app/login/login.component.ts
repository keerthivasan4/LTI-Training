import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string;
pass:string;
err:string;
v(){
  if(this.uname=="Admin" && this.pass=="123"){
    // this.err="Invalid!!";
    //localStorage.setItem("un",this.uname);
    this.router.navigate(['/View/'+this.uname]);
    // this.router.navigateByUrl('/view/'+this.uname);
  }
  else{
    // this.router.navigate(['/view']);
    this.err="Invalid??";
  }
}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
