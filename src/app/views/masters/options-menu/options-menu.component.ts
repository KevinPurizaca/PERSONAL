import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollerOptions, SelectItem } from 'primeng/api';
import { MESSAGE_EMPTY, MESSAGE_SELECT } from 'src/app/core/config/mensajes';
import { ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { ComboModel } from 'src/app/core/util/combo';
import { IconService } from 'src/app/demo/service/icon.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-options-menu',
  standalone: true,
  imports: [
    SharedModule,
    SkeletonModule
  ],
  templateUrl: './options-menu.component.html',
  styleUrl: './options-menu.component.scss'
})
export class OptionsMenuComponent implements OnInit{

  selectedIcon: string | undefined;


  formSearch:FormGroup;
  formRegisterEdit:FormGroup;

  lstModules:any[]=[];

  lstStatus:ComboModel[]=[];
  lstState:ComboModel[]=[]//Form Estados de tabla activo,inactivo ;

  lstIcons:ComboModel[]=[];
  icons: any[] = [];


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


  vmEditRegisterModule:boolean = false;
  titleEditRegisterModule:string = '';

  lsModuleDto! :any;

  constructor(
    fs:FormBuilder,
    fre:FormBuilder,
    private iconService: IconService
  ){
    this.formSearch = fs.group({
      txtTitle:[''],
      intVisible:[-1],
      intSubMenu : [-1]
    });

    this.formRegisterEdit = fre.group({
      txtTitle:   ['',[Validators.required]],
      txtUrl:     ['',[Validators.required]],
      txtOrder:   ['',[Validators.required]],
      intIcon:    [-1,[Validators.required]],//Abrira un listado de iconos con un desplegables //It will open a list of icons with a drop-down menu
      intVisible: [-1],
      intSubMenu: [-1],
      intState :  [-1],

    })
  }

  ngOnInit(): void {
    this.getIcons();
  }

  viewModal(type:number,item:any){
    //Tipe 1 == Mode Register / Tipe 2 == Mode Edit
    switch(type){
      case 1:
        this.formRegisterEdit.markAsUntouched();
        this.formRegisterEdit.reset();        
        this.lsModuleDto = {};
        this.lsModuleDto.iid_modulo = 0;
        this.titleEditRegisterModule  = "Registrar Modulo"
        this.vmEditRegisterModule = true;
        break;
      case 2 :
        this.titleEditRegisterModule  = "Editar Modulo"
        this.lsModuleDto = item;
        this.vmEditRegisterModule  = true;
        break;
    }
  }

  saveModule(){
    this.lsModuleDto.icon =this.selectedIcon ?  'pi pi-' + this.selectedIcon : '';
  }

  getIcons(){

  this.iconService.getIcons().subscribe(data => {
    // Filter out icons marked as deprecated
    let filteredIcons = data.filter(value => !value.icon.tags.includes('deprecate'));

    // Sort icons by name
    filteredIcons.sort((icon1, icon2) => {
        return icon1.properties.name.localeCompare(icon2.properties.name);
    });

    // Map icons to desired format
    this.icons = filteredIcons.map(icon => ({
        id: icon.properties.id,
        value: icon.properties.name
    }));

    // Assign icons to lstIcons using the same mapped format
    this.lstIcons = this.icons.slice(); // You can use .slice() to create a copy
    });
  }

  selectIcon(event:any){
     this.selectedIcon =event.value;
  }

  filterIcon(event:any){
    const searchText = event.filter || '';

    if (!searchText) {
      this.lstIcons = this.icons;/*.map((x:any)=>{
        return{            
          id:x.id,
          value:x.value,
        }
      })*/
  }
  else {
      this.lstIcons = this.icons.filter((x:any) => x.value.includes(searchText));
  }

  }





  /*

    Modulo

    Titulo
    Url
    icono
    orden
    Visible
    Tiene submenu





    Opcion

    Titulo
    Descripcion
    Url
    icono
    orden
    Visible
 */
}
