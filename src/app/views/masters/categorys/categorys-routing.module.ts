import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorysComponent } from './categorys.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: CategorysComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class CategorysRoutingModule { }
