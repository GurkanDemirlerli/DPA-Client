import { MenuService } from './services/menu.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        SideMenuComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        SideMenuComponent
    ],
    providers: [
        MenuService
    ],
})
export class LayoutModule { }