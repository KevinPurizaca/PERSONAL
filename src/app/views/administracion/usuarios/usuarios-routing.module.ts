import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';


@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: UsuariosComponent }
  ])],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
