import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'dpa-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.signOut();
    this.router.navigate(['/pages/auth/login']);
  }
}