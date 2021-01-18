import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formData: any = {
    email: '',
    password: ''
  }

  formErrors: any = {}

  constructor(private authService : AuthService) {
    this.formData.email = 'silali@mail.com'
    this.formData.password = 'password'
  }

  ngOnInit(): void {
  }

  submitForm() : void {
      this.authService.attemptLogin(this.formData)
      this.formErrors = this.authService.formErrors
  }
}
