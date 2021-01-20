import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
uname:string;
  constructor(private router:Router,private a:ActivatedRoute) {
    //this.uname=localStorage.getItem("un");
    this.a.params.subscribe(i=>this.uname=i["un"])
   }
logout(){
  //localStorage.clear();
  this.router.navigate(['/Login']);
}
  ngOnInit(): void {
  }

}
