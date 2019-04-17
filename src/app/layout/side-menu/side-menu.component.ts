import { DepartmentService } from './../../services/department.service';
import { DepartmanModel } from 'src/app/models/departman.model';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { faAddressBook, faFeather, faAdjust, faHome, faProjectDiagram, faCalendarAlt, faUndoAlt, faUsers, faQuestion, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ListUserModel } from 'src/app/models';
import { Roles } from 'src/app/enums';
@Component({
  selector: 'dpa-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('sideMenuAnime', [
      state('collapsed', style({ width: '55px' })),
      state('open', style({ width: '200px' })),
      transition('open => collapsed', animate('400ms ease-in')),
      transition('collapsed => open', animate('400ms ease-out'))
    ]),
    trigger('sideMenuContentAnime', [
      state('collapsed', style({ visibility: 'hidden' })),
      state('open', style({ visibility: 'visible' })),
      transition('open => collapsed', animate('400ms ease-in')),
      transition('collapsed => open', animate('400ms ease-out'))
    ]),
    trigger('minilogoAnime', [
      state('open', style({ display: 'flex' })),
      state('collapsed', style({ display: 'none' }))
    ]),
    trigger('avatarAnime', [
      state('open', style({ display: 'flex' })),
      state('collapsed', style({ display: 'none' }))
    ]),
  ]
})
export class SideMenuComponent implements OnInit {
  isMax = true;
  menuState: string;

  user: ListUserModel;
  department: DepartmanModel;
  public roles = Roles;

  icons = {
    faHome,
    faProjectDiagram,
    faCalendarAlt,
    faUndoAlt,
    faUsers,
    faQuestion,
    faExclamationTriangle,
    faAddressBook,
    faFeather,
    faAdjust
  }

  constructor(private menuService: MenuService, private authService: AuthService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.authService.getMe().subscribe((user) => {
      this.user = user;
      this.departmentService.getMyDepartment().subscribe((department) => {
        this.department = department;
        console.log(this.department);
      })
    }, (err) => {

    });
    this.menuService.isMax$.subscribe((menuState) => {
      this.isMax = menuState;
      this.menuState = (this.isMax === true) ? 'open' : 'collapsed';
      console.log(this.menuState);
    });
  }

}