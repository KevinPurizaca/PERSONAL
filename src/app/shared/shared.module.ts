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
import { PasswordModule } from 'primeng/password';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule} from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FieldsetModule } from 'primeng/fieldset';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { ChartModule } from 'primeng/chart';
import { StyleClassModule } from 'primeng/styleclass';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
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
    PasswordModule,
    AutoCompleteModule,
    InputTextareaModule,
    CardModule,
    SelectButtonModule,
    FieldsetModule,
    RadioButtonModule,
    DividerModule,
    ProgressSpinnerModule,   

    StyleClassModule,
    ChartModule,
    
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
    PasswordModule,
    CheckboxModule,
    AutoCompleteModule,
    CalendarModule,
    InputTextareaModule,
    CardModule,
    SelectButtonModule,
    FieldsetModule,
    RadioButtonModule,
    DividerModule,
    ProgressSpinnerModule,

    
    MenubarModule,
		TabMenuModule,

    StyleClassModule,
    ChartModule,
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