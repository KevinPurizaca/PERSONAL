import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilesComponent } from './perfiles.component';


@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: PerfilesComponent }
  ])],
  exports: [RouterModule]
})
export class PerfilesRoutingModule { }
