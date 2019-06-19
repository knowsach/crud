import { Component, OnInit, Input } from '@angular/core';
import { user } from './userData.model';
import { EmpService } from '../emp.service';
import {Router ,ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: user;
   formError; errorMessage: string;    //contains form error text message.
   editIndex : number; 
   activeEdit = false;                 //set to true when any edits in form is done.
   id : number;

  constructor(private empService: EmpService , private route : ActivatedRoute,private router : Router) {
    empService = new EmpService;
    this.user = new user();  
  }

  ngOnInit() {
    this.route.paramMap.subscribe(( params : ParamMap)=>{
        let id =parseInt( params.get('id')); //getting data from the table component .
        this.editIndex = id;
    });

    if(this.editIndex > -1 ){    //editIndex checks if update will be formed or not.
    this.updateForm();
     }
  }

  //to get the gender and marital status of the employee.
  genderRadioChange(event : any){
   if(event.target.value == 0)
   this.user.gender = 'male';
   else
   this.user.gender = 'female';
  }
  maritalRadioChange(event:any){
    if(event.target.value == 0)
    this.user.marital = 'married';
    else
    this.user.marital = 'unmarried';
  }

//after form validation , user data is sent to onSubmit function
  onSubmit() {
    if(this.activeEdit == true){
      for(var i=0; i<this.empService.table.length; i++){
          if(this.empService.table[i].id == this.editIndex){
              this.empService.table[i] = this.user;
              this.empService.table[i].id = this.id;
              this.activeEdit = false;
          }
      }
    }
    else{
    var newUser = new user();
    newUser = this.user;
    this.empService.addData(newUser);
    this.user = new user();
    this.user.marital = null;
    this.user.gender = null;

    }
  }

  /* to validate the form before submitting */
  formValidation(){
    var u1 = new user();
    u1 = this.user;
    this.formError = false;
     if(u1.name.length < 4){
     this.errorMessage = 'name should be at least four characters'; this.formError = true; }
    else if(u1.email.indexOf('@') == -1){
     this.errorMessage = 'enter a valid email address.'; this.formError = true; }

   else if(u1.address.length < 10){
    this.errorMessage = 'enter a valid adress'; this.formError = true; }
    else  if(u1.dob.length == 0 ){
     this.errorMessage = 'enter birthdate'; this.formError = true;
    }
    else if(u1.doj.length == 0){
      this.errorMessage = 'enter date of joining'; this.formError = true;  }
    else if(u1.gender.length == 0){
      this.errorMessage = 'select gender'; this.formError = true; }
    else if(u1.marital.length == 0){
      this.errorMessage = 'select marital status'; this.formError = true;}
      else{
      this.formError = false;
      this.errorMessage = null;
      }
    
    if(this.formError == false)
    {
      this.formError = false;
    this.onSubmit();
    }
  }

//to edit any previous data.
  updateForm(){
     this.activeEdit = true;
    for(var i=0; i<this.empService.table.length; i++){
      if(this.empService.table[i].id == this.editIndex){
        this.user.name = this.empService.table[i].name;
        this.user.address = this.empService.table[i].address;
        this.user.email = this.empService.table[i].email;
        this.user.contact = this.empService.table[i].contact;
        this.user.dob = this.empService.table[i].dob;
        this.user.doj = this.empService.table[i].doj;
        this.id = this.empService.table[i].id;
        
        if(this.empService.table[i].gender == 'male')
          this.user.gender = 'male';
          else
          this.user.gender = 'female';

          if(this.empService.table[i].marital == 'married')
          this.user.marital = 'married';
          else
          this.user.marital = 'unmarried'
          
      }
    }
  }

  //sends the form from form component to table component when form has no error.
  routeToTable(){
    if(this.formError == false)
     this.router.navigate(["/empTable"]);
  }
}
