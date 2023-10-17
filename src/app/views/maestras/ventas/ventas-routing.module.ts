import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './ventas.component';

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: VentasComponent }
  ])],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
