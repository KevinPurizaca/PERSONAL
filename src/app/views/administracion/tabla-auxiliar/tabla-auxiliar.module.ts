import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaAuxiliarRoutingModule } from './tabla-auxiliar-routing.module';
import { TablaAuxiliarComponent } from './tabla-auxiliar.component';


@NgModule({
  declarations: [TablaAuxiliarComponent],
  imports: [
    CommonModule,
    TablaAuxiliarRoutingModule
  ]
})
export class TablaAuxiliarModule { }
