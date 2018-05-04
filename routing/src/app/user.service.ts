import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  loggedIn: Boolean = false;
  constructor() { }
  isLoggedIn(): Boolean {
    return this.loggedIn;
  }
  validateCredentials(user: any) {
    if (user.user === 'gilles' && user.password === 'password') {
      this.loggedIn = true;
      return this.loggedIn;
    }
  }
}
