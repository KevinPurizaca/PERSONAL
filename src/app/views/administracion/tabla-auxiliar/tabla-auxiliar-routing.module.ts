import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaAuxiliarComponent } from './tabla-auxiliar.component';


@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: TablaAuxiliarComponent }
  ])],
  exports: [RouterModule]
})
export class TablaAuxiliarRoutingModule { }
