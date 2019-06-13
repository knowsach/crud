import { Component, OnInit, Input } from '@angular/core';
import { user } from './userData.model';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: user;
  public _employeService: EmpService;
   showTable : boolean = false;


  // table: user[];

  constructor(private empService: EmpService) {
    this.user = new user();
    // this.table = new Array<user>();

  }

  ngOnInit() {

  }


  //function for submitting  
  onSubmit() {
    var newUser = new user();
    newUser = this.user;
    this.empService.addData(newUser);
    this.user = new user();

    console.log(newUser.name);
    console.log(this._employeService);

    this.showTable = true;

    // this.table.push(newUser);
    // this.displayTable = true;
    // this.user = new user();
  }
}
