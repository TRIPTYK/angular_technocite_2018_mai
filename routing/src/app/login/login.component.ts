import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  constructor(
    fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loginForm = fb.group({
      user: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  getValidationError(field: string): string {
    const errors = {
      required: "Le champs est requis",
      minlength: "le champs doit contenir au moins 12 caractères"
    };

    return Object.keys(this.loginForm.controls[field].errors).reduce(
      (prev, current, currentIndex) => {
        return ` ${prev} Rule ${currentIndex} - ${errors[current]}`;
      },
      ""
    );
  }
  onSubmit(value: FormObject) {
    if(this.userService.validateCredentials(value)){
      this.router.navigateByUrl(this.returnUrl);
    } else{
       alert("error")
    }
  }
}

interface FormObject {
  user: string;
  password: string;
}
