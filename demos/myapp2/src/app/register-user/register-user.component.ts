import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  public userForm: FormGroup;

  constructor() { 

    this.userForm = new FormGroup({
      fullName : new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })

  }

  ngOnInit(): void {
  }

  handleRegisterUser(){
    console.log('REgister button clicked')
    console.log(this.userForm.value)
  }

}
