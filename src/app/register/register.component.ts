import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import{AuthService} from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 registerform = new FormGroup({
   "firstName" :new FormControl(null, [Validators.min(3), Validators.maxLength(10) ,Validators.required, Validators.pattern(/[a-zA-Z]{3,9}/) ] ) ,
   "lastName" :new FormControl(null, [Validators.min(3), Validators.maxLength(10), Validators.pattern(/[a-zA-Z]{3,9}/) ,Validators.required]) ,
   "email" :new FormControl(null, [Validators.email ,Validators.required]) ,
   "password" :new FormControl(null, [Validators.min(3), Validators.maxLength(10), Validators.required]) ,
 })
 
 constructor(private  _AuthService:AuthService ,private  _Router:Router) { }
 get_form_info(){
    if (this.registerform.valid==true){
      this._AuthService.register(this.registerform.value).subscribe(( response)=>{  console.log(response) })
    // if(Response.message == "success"){   this._Router.navigate(["/login"])}
    this._Router.navigate(["/login"])
    }
 }
 
  ngOnInit(): void {
  }

}
