import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup(
    {
    userName: new FormControl(''),
    password: new FormControl('')
    });
  onSubmit() {
    console.warn(this.loginForm.value);

  }

  registrationForm = new FormGroup(
    {
    r_userName: new FormControl(''),
    r_email: new FormControl(''),
    r_password: new FormControl(''),
    r_confirmpassword: new FormControl('')
    });
}
