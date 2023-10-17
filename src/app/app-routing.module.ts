import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { IntentoLoginGuard } from './core/guard/intento-login.guard';
import { UserLoggedGuard } from './core/guard/user-logged.guard';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full' 
  },
  {
    path: 'inicio', component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)/*, canActivate: [UserLoggedGuard]*/
      },
    ],
  },
  {
    path: '', component: AppLayoutComponent,
    children: [
      {
        path: 'maestras',
        loadChildren: () => import('./views/maestras/maestras.module').then(m => m.MaestrasModule)/*, canActivate: [UserLoggedGuard]*/
      },
      {
        path: 'administracion',
        loadChildren: () => import('./views/administracion/administracion.module').then(m => m.AdministracionModule)/*, canActivate: [UserLoggedGuard]*/
      },
      {
        path: 'ventas',
        loadChildren: () => import('./views/maestras/ventas/ventas.module').then(m => m.VentasModule)/*, canActivate: [UserLoggedGuard]*/
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'pages/notfound', component: NotfoundComponent },
  { path: 'login', component: LoginComponent/*, canActivate: [IntentoLoginGuard]*/ },
  { path: '**', redirectTo: 'pages/notfound' },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
