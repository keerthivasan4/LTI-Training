import { Component, OnInit } from '@angular/core';
import{ Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
uname:string;
  constructor(private r:ActivatedRoute,private router:Router) { 
    this.r.params.subscribe(i=>this.uname=i['key']);
    // this.uname=localStorage.getItem("un");
    // localStorage.clear();
  }
  logout(){
    this.router.navigate(['/Login']);
  }
  ngOnInit(): void {
  }

}
