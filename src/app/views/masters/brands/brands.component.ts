import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MESSAGE_EMPTY, MESSAGE_SELECT } from 'src/app/core/config/mensajes';
import { ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { ComboModel } from 'src/app/core/util/combo';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit{

  formSearch:FormGroup;

  lstBrands:any[]=[];
  lstState:ComboModel[]=[];

  totalRecord:number = 0;
  first:number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  vMessageEmpty : string=MESSAGE_EMPTY;
  vMessageSelect : string=MESSAGE_SELECT;

  titleEditRegisterBrand:string ='';
  vmEditRegisterBrand:boolean = false;

  
  uploadedFiles: any[] = [];

  req ={
    
    inumero_pagina: 0,
    itotal_pagina: ROWS_DEFAULT
  }
  
  
constructor(
  fs:FormBuilder
){
  this.formSearch = fs.group({
    txtName:[''],
    intStatus:[-1]
  })
}

  ngOnInit(): void {
    
  }



}