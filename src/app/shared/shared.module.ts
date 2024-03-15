import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule} from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { ChartModule } from 'primeng/chart';
import { StyleClassModule } from 'primeng/styleclass';
import { FileUploadModule } from 'primeng/fileupload';


import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    ToastModule,
    DialogModule,
    ConfirmPopupModule,
    CheckboxModule,
    PaginatorModule,
    AutoCompleteModule,
    InputTextareaModule,
    CardModule,
    FileUploadModule,
    StyleClassModule,
    ChartModule,    
    DividerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    ToastModule,
    DialogModule,
    ConfirmPopupModule,
    PaginatorModule,
    CheckboxModule,
    AutoCompleteModule,
    CalendarModule,
    InputTextareaModule,
    CardModule,
    FileUploadModule,
    StyleClassModule,
    ChartModule,
    DividerModule
  ],
  providers: []
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}