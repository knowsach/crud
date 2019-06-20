import { Component, OnInit ,Input , ViewChild} from '@angular/core';
import { EmpService } from 'src/app/emp.service';
import {user} from '../userData.model';
import { Router } from '@angular/router';
import {MatTable } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

user : user[];
  datasource : user[]; 

displayedColumns = ['Name','Email','Contact','Address','Birthday','Gender','Date of Joining','Marital Status','Edit','Delete'];

  constructor(private emp:EmpService , private router : Router) {
    this.datasource = this.emp.getData();
  }

  ngOnInit() {
    this.user = new Array<user>();
    this.user = this.emp.getData();
    //this.datasource = this.emp.getData();
  }

  selectedUser : user;
  index : number;

  @ViewChild(MatTable) table: MatTable<any>;


  //function to delete the selected item from the array.
  deleteItem(index : number){
    for(var i=0; i< this.emp.table.length; i++){
     if(this.user[i].id == index){
          this.emp.table.splice(i,1);
          this.table.renderRows();
     }
    }
  }

 /*  edit function.......  */
 edit(index : number){
     this.router.navigate(['/empForm',index]);
 } 

 routeToForm(){
  this.router.navigate(['']);
 }
} 