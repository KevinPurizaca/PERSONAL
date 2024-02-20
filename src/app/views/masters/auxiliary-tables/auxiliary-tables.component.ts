import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { MESSAGE_EMPTY, MESSAGE_SELECT } from 'src/app/core/config/mensajes';
import { ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { ComboModel } from 'src/app/core/util/combo';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-auxiliary-tables',
  standalone: true,
  imports: [
    PanelModule,
    SharedModule
    
  ],
  templateUrl: './auxiliary-tables.component.html',
  styleUrl: './auxiliary-tables.component.scss'
})
export class AuxiliaryTablesComponent implements OnInit {

  formSearch:FormGroup;


  lstState:ComboModel[]=[];

  totalRecord:number = 0;
  first:number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;
  vMessageEmpty : string=MESSAGE_EMPTY;
  vMessageSelect : string=MESSAGE_SELECT;
  req ={
    
    inumero_pagina: 0,
    itotal_pagina: ROWS_DEFAULT
  }
  constructor(
    fs:FormBuilder
  ){
    this.formSearch = fs.group({
      txtDescription :[''],
      intState:[-1]
    });
  }

  ngOnInit(): void {
    
  }

}
