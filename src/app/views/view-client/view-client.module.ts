import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewClientRoutingModule } from './view-client-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ViewClientRoutingModule
  ]
})
export class ViewClientModule { }
