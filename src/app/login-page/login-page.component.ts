import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  SignupnForm: FormGroup;

  constructor() { }
  ngOnInit(): void {
    "use strict";
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }
  onSubmit() {

  }

}
