import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCoreService } from './services/httpCore.service';
import { UtilService } from './util/util.services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpCoreService,
    UtilService,
  ],
})
export class CoreModule {
}


