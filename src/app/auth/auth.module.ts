import { AuthService } from './../services/auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        LogoutComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [],

})
export class AuthModule { }