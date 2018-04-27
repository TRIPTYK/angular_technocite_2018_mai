import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(fb: FormBuilder, private userService: UserService) {
    this.loginForm = fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  getValidationError(field: string): string {
    const errors = {
      required: 'Le champs est requis',
      minlength: 'le champs doit contenir au moins 12 caractères'
    };

    return Object.keys(this.loginForm.controls[field].errors).reduce(
      (prev, current, currentIndex) => {
        return ` ${prev} Rule ${currentIndex} - ${errors[current]}`;
      },
      ''
    );
  }
  onSubmit(value: FormObject) {
    this.userService.validateCredentials(value);
  }
}

interface FormObject {
  user: string;
  password: string;
}
