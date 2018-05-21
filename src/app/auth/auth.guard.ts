import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.userService.user !== undefined) {
      console.log(this.userService.user);
      this.router.navigateByUrl('/chat');
      return false;
    }

    return this.isValidSession();
  }

  isValidSession(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.userService.checkSession()
        .subscribe(
          user => {
            console.log(user);
            this.userService.user = user;
            this.router.navigateByUrl('/chat');
            resolve(false);
          },
          err => {
            console.log(err);
            resolve(true);
        });
    });
  }
}
