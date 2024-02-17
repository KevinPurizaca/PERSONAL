import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Portafolio',
    loadChildren: () => import('./portafolio-client/portafolio-client.module').then(m => m.PortafolioClientModule)
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
export class ViewClientRoutingModule { }
