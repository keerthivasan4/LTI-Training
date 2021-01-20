import { Component } from '@angular/core';
import { count } from 'console';
import { $ } from 'protractor';
import { Contact } from '../app/Models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addVar:number=1;
  list:Contact[];
  i:Contact;
  constructor() {
    // this.i=new Contact();
    // this.i.contactName="keerthi";
    this.list=[
      {"contactName":"Tony" ,"phoneNumber":"9874563210"},
      {"contactName":"Henry" ,"phoneNumber":"9874563210"},
      {"contactName":"Bale" ,"phoneNumber":"9874563210"},
      {"contactName":"Obiwan" ,"phoneNumber":"9874563210"},
      {"contactName":"Bane" ,"phoneNumber":"9874563210"},
      {"contactName":"Ivan" ,"phoneNumber":"9999999999"}
    ];
    this.list.sort((a,b)=>a.contactName.localeCompare(b.contactName));
    console.log(this.list);
  }

  // s:string;
  nameT:Boolean=true;
  phoneT:boolean=true;
  sortByName(){
  
    if(this.nameT){
      this.list.sort((a,b)=>b.contactName.localeCompare(a.contactName));
    }
    else if(!this.nameT){
      this.list.sort((a,b)=>a.contactName.localeCompare(b.contactName));
    }
    this.nameT=!this.nameT;
  }
  sortByPhone(){
      if(this.phoneT){
        this.list.sort((a,b)=>b.phoneNumber.localeCompare(a.phoneNumber));
      }
      else if(!this.phoneT){
        this.list.sort((a,b)=>a.phoneNumber.localeCompare(b.phoneNumber));
      }
      this.phoneT=!this.phoneT;
    }

  deleteContact(v:string ){
    console.log(v);
    for(let i = 0; i < this.list.length; ++i){
      var item=this.list[i];
      console.log(item);
      if (item.contactName == v) {
          this.list.splice(i,1);
      }
    }
  }

  cname:string;
  cph:string;
  srch:string;
   searchcont(){
     this.cname="not found";
     this.cph="";
    for(var i=0;i< this.list.length; i++ ){
      if(this.list[i].contactName==this.srch){
        this.cname=this.list[i].contactName;
        this.cph=this.list[i].phoneNumber;
        }
      }
      this.srch='';
  }
  

  ipname:string;
  ipphone:string;
  item:Contact;
  c:number;
  save(){
    this.item = new Contact();
    this.c=0
    for(var i=0;i< this.list.length; i++ ){
      this.c++;
      if(this.list[i].contactName==this.ipname){
        alert("Contact Name Already Present");
        this.ipname='';
        this.c=-1;break;

      }
      if(this.list[i].phoneNumber==this.ipphone){
        alert("Contact Number Already Present");
        this.ipphone='';
        this.c=-1;break;
      }
    }
    console.log("c"+this.c+" "+this.list.length);
    if(this.c==this.list.length){
      this.item.contactName=this.ipname;
      this.item.phoneNumber=this.ipphone;
      console.log(this.item);
      this.list.push(this.item);
      alert("Saved");
      this.ipname='';
      this.ipphone='';
      this.list.sort((a,b)=>a.contactName.localeCompare(b.contactName));
    }
  }
  valid(){
    var exp = new RegExp("^[a-zA-Z ]{4,}$");
    var result = exp.exec(this.ipname);
    var exp1 = new RegExp("^[6789]{1}[0-9]{9}$");
    var r1= exp1.exec(this.ipphone);
    if(result!=null && r1 != null){
      this.save();
    }
    else{
      this.ipname='';
      this.ipphone='';
      // $("#in").css({"color":"red"});
      alert("Invalid Entry");
    }
   
  }
}
