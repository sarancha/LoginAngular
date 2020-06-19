import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title = 'Modal Login Form';

  loginGroup: FormGroup;

  form() {
    this.loginGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  constructor() {}

  ngOnInit(): void {}
}