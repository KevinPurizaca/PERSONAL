import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MESSAGE_EMPTY, MESSAGE_SELECT } from 'src/app/core/config/mensajes';
import { ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { ComboModel } from 'src/app/core/util/combo';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent implements OnInit{

  formSearch:FormGroup;
  formRegisterEdit:FormGroup;

  lstProducts:any[]=[];

  lstCategory:ComboModel[]=[];
  lstSubCategory:ComboModel[]=[];
  lstBrand:ComboModel[]=[];
  lstStock:ComboModel[]=[];
  lstStars:ComboModel[]=[];
  lstSupplier:ComboModel[]=[];
  lstState:ComboModel[]=[];


  totalRecord:number = 0;
  first:number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  vMessageEmpty : string=MESSAGE_EMPTY;
  vMessageSelect : string=MESSAGE_SELECT;

  titleEditRegisterProduct:string ='';
  vmEditRegisterProduct:boolean = false;

  
  uploadedFiles: any[] = [];

  req ={
    
    inumero_pagina: 0,
    itotal_pagina: ROWS_DEFAULT
  }
  
  ngOnInit(): void {}
  
  constructor(
    fb:FormBuilder,
    fre:FormBuilder
  ) { 
    this.formSearch = fb.group({
      txtName : [''],
      txtDescription : [''],
      intCategory :[-1],
      intSubCategory : [-1],
      intBrand : [-1],
      intStock : [-1],//low stock,full stock
      // intPrice: [-1],
      intStars :[-1],
      intSupplier:[-1],
      intState:[-1]
    });

    this.formRegisterEdit = fre.group({
      txtName : [''],
      txtDescription : [''],
      intCategory :[-1],
      intSubCategory : [-1],
      intBrand : [-1],
      intStock : [''],//low stock,full stock
      intPrice: [''],
      //intStars :[-1],
      intSupplier:[-1],
      intState:[-1]
    });
  }

  saveProduct():void{

  }


}






