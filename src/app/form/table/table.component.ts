import { Component, OnInit ,Input} from '@angular/core';
import { EmpService } from 'src/app/emp.service';
import {user} from '../userData.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

user : user[];

  constructor(private emp:EmpService , private router : Router) {    
  }

  ngOnInit() {
    this.user = new Array<user>();
    this.user = this.emp.getData();
    this.emp.checking = this.emp.checking + 1;
  }

  selectedUser : user;
  index : number;

  //function to delete the selected item from the array.
 deleteItem(index : number , u1 : user){
   this.selectedUser = u1;
   for(var i=0; i< this.emp.table.length; i++){
    if(this.user[i].id == index){
         this.emp.table.splice(i,1);
    }
   }
 }

 /*  edit function.......  */
 edit(index : number){
     this.router.navigate(['/empForm',index]);
 } 

 routeToForm(){
   var num = 0
  this.router.navigate(['']);
 }
} 