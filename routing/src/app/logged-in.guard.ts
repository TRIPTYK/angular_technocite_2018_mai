import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedInGuard implements CanActivate {
  urlToGo:string;
  constructor(private router: Router, private userService: UserService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('LoggedIn guard');
    if (this.userService.isLoggedIn()){
      return true;
     } else  {
      this.urlToGo = state.url;
       this.router.navigate(['login'], {
         queryParams: { returnUrl: state.url }
       });
       return false;
     }
  }
}
