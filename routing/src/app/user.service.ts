import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  loggedIn: Boolean = false;
  constructor() { }
  isLoggedIn(): Boolean {
    return this.loggedIn;
  }
}
