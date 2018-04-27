import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(12)]],
      email:['', [ Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  getValidationError(field: string): string {
    const errors = {
      required: 'Le champs est requis',
      minlength: 'le champs doit contenir au moins 12 caractères',
      email: 'le champs doit etre un email valide'
    };

    return Object.keys(this.loginForm.controls[field].errors).reduce(
    (prev, current, currentIndex) =>
    {

      return ` ${prev} Rule ${currentIndex} - ${errors[current]}`;
    }, '' );
  }
  onSubmit(value: FormObject) {
    // console.log(this.loginForm.valid);
    console.log('----------------------------------');
    console.log(this.loginForm.controls.user.errors);
    // console.log(this.loginForm.controls.password.errors);
    // console.log('You submitted value', value);
  }
}

interface FormObject {
  user: string;
  password: string;
}
