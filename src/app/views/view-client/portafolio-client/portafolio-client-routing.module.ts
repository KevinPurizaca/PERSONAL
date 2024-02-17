import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioClientComponent } from './portafolio-client.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PortafolioClientComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class PortafolioClientRoutingModule { }
