import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faUserPlus, faBars, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dpa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  icons = {
    faSearch,
    faSignInAlt,
    faUserPlus,
    faBars,
    faSignOutAlt
  }
  constructor(
    private menuService: MenuService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onLogoutClick() {
    this.authService.signOut().subscribe((res) => {
    }, (error) => {
      this.router.navigate(['/auth/login']);
    }, () => {
      this.router.navigate(['/auth/login']);
    });
    // this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' });

  }

  toggleMenu() {
    let menuSize = this.menuService.isMax.value;
    this.menuService.toggleMenuSize(!menuSize);
  }

}