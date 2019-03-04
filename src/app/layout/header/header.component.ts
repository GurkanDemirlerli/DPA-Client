import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faUserPlus, faBars,faSearch } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../services/menu.service';

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
    faBars
  }
  constructor(private menuService: MenuService) { }

  ngOnInit() {

  }

  toggleMenu() {
    let menuSize = this.menuService.isMax.value;
    this.menuService.toggleMenuSize(!menuSize);
    console.log("menu :" + !menuSize);
  }

}