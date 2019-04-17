import { AuthGuard, AuthNotAllowed } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [AuthNotAllowed],
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
    // canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'pages', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
