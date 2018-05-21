import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userService.turnOffLoadingAnimation('main-loading');
  }

  ngOnInit() {
    this.createForm();
    this.checkUserLogin();
  }

  checkUserLogin() {
    const inputLogin = this.authForm.get('login');

    inputLogin.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(login => {
          return this.userService.checkIsLogin(login);
        })
      )
      .subscribe(
        ans => {
          if (ans.isLogin) {
            inputLogin.setErrors({ isLogin: true });
          }
        },
          err => {
          console.log(err);
        }
      );
  }

  addUser() {
    this.userService.addUser(this.authForm.get('login').value)
      .subscribe(
        user => {
          this.userService.user = user;
          this.router.navigateByUrl('/chat');
        },
        err => {
          console.log(err);
        }
      );
  }

  getErrorMessage() {
    const error = this.authForm.get('login').errors;
    return error.required ? 'You must enter a value' :
      error.isLogin ? 'Login is already used' :
        '';
  }

  createForm() {
    this.authForm = this.formBuilder.group({
      login: [ '', Validators.required ],
    });
  }

}
