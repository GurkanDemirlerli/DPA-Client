import { Component, OnInit } from '@angular/core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Roles } from 'src/app/enums';

@Component({
  selector: 'dpa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  icons = {
    faUser,
    faLock
  };


  loginForm = new FormGroup({
    username: new FormControl('',
      [
        Validators.required,
      ]
    ),
    password: new FormControl('',
      [
        Validators.required,
      ],

    )
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.authService.signIn({
      login: this.username.value,
      password: this.password.value,
    }).subscribe((resp) => {
      if (resp.success) {
        if (this.authService.userInfo.roles === Roles.Administrator || this.authService.userInfo.roles === Roles.User) {
          this.router.navigate(['/pages/my-schedules']);
        } else if (this.authService.userInfo.roles === Roles.Admin) {
          this.router.navigate(['/pages/schedules']);
        }else{
          this.router.navigate(['/pages']);
        }
      } else {
        this.loginForm.setErrors({
          invalidLogin: true
        });
      }
    });
  }


}
