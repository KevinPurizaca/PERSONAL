import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'perfiles',
    loadChildren: () => import('./perfiles/perfiles.module').then(m => m.PerfilesModule)/*, canActivate: [UsuarioGuard]*/
  },
  {
    path: 'tabla-auxiliar',
    loadChildren: () => import('./tabla-auxiliar/tabla-auxiliar.module').then(m => m.TablaAuxiliarModule)/*, canActivate: [UsuarioGuard]*/
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)/*, canActivate: [UsuarioGuard]*/
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
