import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class ChatGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.userService.user !== undefined) {
      return true;
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
            resolve(true);
          },
          err => {
            console.log(err);
            this.router.navigateByUrl('/auth');
            resolve(false);
          });
    });
  }
}
