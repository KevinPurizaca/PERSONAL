import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuxiliaryTablesComponent } from './auxiliary-tables.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: AuxiliaryTablesComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class AuxiliaryTablesRoutingModule { }
