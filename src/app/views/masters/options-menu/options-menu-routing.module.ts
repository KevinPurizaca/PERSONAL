import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsMenuComponent } from './options-menu.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OptionsMenuComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class OptionsMenuRoutingModule { }
