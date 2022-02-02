import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';         //FormGroup >>>>>> the form itself
import { FormControl } from '@angular/forms';      // formControl >>>>>> input

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Registeration_form :FormGroup = new FormGroup ({
    "firstName" : new FormControl( ) ,
    "lastName" : new FormControl( ) ,
    "email" : new FormControl( ) ,
    "password" : new FormControl( )
  })
  constructor() { }

  ngOnInit(): void {
  }

}
