import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  public userForm: FormGroup;

  constructor() { 

    this.userForm = new FormGroup({
      fullName : new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

  }

  ngOnInit(): void {
  }

  handleRegisterUser(){
    console.log('REgister button clicked')
    console.log(this.userForm)
  }

}
