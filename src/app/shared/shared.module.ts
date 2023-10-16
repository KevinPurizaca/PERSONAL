import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordModule } from 'primeng/password';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StepsModule } from 'primeng/steps';

import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { TabMenu, TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {SpeedDialModule} from 'primeng/speeddial';

import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StepsComponent } from '../components/shared/steps/steps.component';
@NgModule({
  declarations: [
    StepsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DropdownModule,
    TableModule,
    SliderModule,
    TreeTableModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    FileUploadModule,
    MultiSelectModule,
    CheckboxModule,
    PaginatorModule,
    PasswordModule,
    AutoCompleteModule,
    InputTextareaModule,
    ChipsModule,
    CardModule,
    ToolbarModule,
    SpeedDialModule,
    SelectButtonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DropdownModule,
    TableModule,
    SliderModule,

    ButtonModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    ConfirmPopupModule,

    PaginatorModule,
    PasswordModule,
    FileUploadModule,
    StepsModule,
    MultiSelectModule,
    CheckboxModule,
    AutoCompleteModule,
    CalendarModule,
    TabViewModule,
    StepsComponent,
    InputTextareaModule,
    TreeTableModule,
    ChipsModule,
    CardModule,
    ToolbarModule,
    SpeedDialModule,
    SelectButtonModule
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