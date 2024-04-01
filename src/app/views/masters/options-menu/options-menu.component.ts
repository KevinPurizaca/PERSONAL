import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService, ScrollerOptions, SelectItem } from 'primeng/api';
import { MESSAGE_EMPTY, MESSAGE_SELECT, MSG_CRUD } from 'src/app/core/config/mensajes';
import { PARAMS_AUXILIAR, ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { ComboModel } from 'src/app/core/util/combo';
import { IconService } from 'src/app/demo/service/icon.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { Endpoints } from 'src/app/core/config/endpoints';

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
  selectedIconOption: string | undefined;


  formSearch:FormGroup;
  formRegisterEditModule:FormGroup;
  formRegisterEditOption:FormGroup;

  lstModules:any[]=[];
  lstOptions:any[]=[];


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
    iid_module:-1,
    vdescription_module:'',
    vname_module:'',
    istate_record:-1,
    iindex: 0,
    ilimit: ROWS_DEFAULT
  }

  reqOptions ={
    iid_option:-1,
    iid_module:-1,
    vname_option:'',
    vdescription_option:'',
    istate_record:-1,
    iindex: 0,
    ilimit: ROWS_DEFAULT
  }



  vmEditRegisterModule:boolean = false;
  titleEditRegisterModule:string = '';
  submitted: boolean = false;

  vmEditRegisterOption:boolean = false;
  titleEditRegisterOptions:string = 'Opciones';

  lsModuleDto! :any;
  lsOptionsDto! :any;

  firstOptions:number = 0;
  totalRecordOptions:number = 0;

  
  paramTDState = PARAMS_AUXILIAR.STATES;

  constructor(
    fsm:FormBuilder,
    frem:FormBuilder,
    freo:FormBuilder,

    private iconService: IconService,
    private httpCoreService: HttpCoreService,
    private commonService: CommonService,
    private confirmationService: ConfirmationService,
  ){
    this.formSearch = fsm.group({
      txtTitle:[''],
      intVisible:[-1],
      intSubMenu : [-1],
      intState: [-1]
    });

    this.formRegisterEditModule = frem.group({
      txtName:   ['',[Validators.required]],
      txtDescription:   ['',[Validators.required]],
      txtUrl:     ['',[Validators.required]],
      intOrder:   ['',[Validators.required]],
      txtIcon:    [-1,[Validators.required]],//Abrira un listado de iconos con un desplegables //It will open a list of icons with a drop-down menu
      intVisible: [-1],
      intSubMenu: [-1],
      intState :  [-1],

    });
    this.formRegisterEditOption = freo.group({
      txtName:   ['',[Validators.required]],
      txtDescription:   ['',[Validators.required]],
      txtUrl:     ['',[Validators.required]],
      intOrder:   ['',[Validators.required]],
      txtIcon:    [-1,[Validators.required]],//Abrira un listado de iconos con un desplegables //It will open a list of icons with a drop-down menu
      intVisible: [false],
      intState :  [-1],

    })
    
  }

  ngOnInit(): void {
    this.loadStateCB();
    this.getIcons();

    this.loadDataModule(this.req);
  }

  viewModal(type:number,item:any){
    //Tipe 1 == Mode Register / Tipe 2 == Mode Edit
    switch(type){
      case 1:
        this.formRegisterEditModule.markAsUntouched();
        this.formRegisterEditModule.reset();        
        this.lsModuleDto = {};
        this.lsModuleDto.iid_modulo = 0;
        this.titleEditRegisterModule  = "Registrar Modulo"
        this.vmEditRegisterModule = true;
        break;
      case 2 :
        this.titleEditRegisterModule  = "Editar Modulo"
        this.lsModuleDto = item;
        this.lsModuleDto.iid_modulo = item.iid_module;        
        this.selectedIcon =  item.vicon_module;
        this.vmEditRegisterModule  = true;
        break;
      case 3 :
        this.formRegisterEditOption.markAsUntouched();
        this.formRegisterEditOption.reset();  
        this.titleEditRegisterOptions  = "Opciones Modulo"
        this.lsOptionsDto = {};
        this.lsOptionsDto.iid_module = item.iid_module;  
        this.reqOptions.iid_module = item.iid_module;
        this.loadDataOption(this.reqOptions)  ;    
        this.vmEditRegisterOption  = true;
        break;
    }
  }

  //#region  MODULE

  loadDataModule(req:any){
    this.lstModules =[];
    this.httpCoreService.post(req,Endpoints.GetListModule).subscribe(res =>{
      if(res.isSuccess){
        this.lstModules = res.data;       
        this.totalRecord = res.iTotal_record;
      }
      else {
        this.commonService.HanddleErrorMessage(res);
      }
    })

  }

  saveModule(){
    this.submitted = true;

    let value = this.formRegisterEditModule.value;
    for (let c in this.formRegisterEditModule.controls) {
      this.formRegisterEditModule.controls[c].markAsTouched();
    }

    let req ={
      iid_module          : this.lsModuleDto.iid_modulo,
      vname_module        : value.txtName  ,
      vdescription_module : value.txtDescription  ,
      vurl_module         : value.txtUrl  ,
      vicon_module        : this.selectedIcon ?  this.selectedIcon : ''  ,
      iorder_module       : value.intOrder  ,
      bvisible_module     : value.intVisible  ,
      bsub_menu_module    : value.intSubMenu  ,
      istate_record       : value.intState  ,
      iuser_token         : 1,//value.  
    }

    this.httpCoreService.post(req,Endpoints.RegisterModule).subscribe(res => {
      if(res.isSuccess){
        this.loadDataModule(this.req);
        this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ACTUALIZADA_REGISTRADA);
        this.vmEditRegisterModule = false;
      }
      else {
        this.commonService.HanddleErrorMessage(res);
      }
    })
    // this.lsModuleDto.icon =this.selectedIcon ?  'pi pi-' + this.selectedIcon : '';
  }

  deleteModule(event:any,item:any){
    this.confirmationService.confirm({
      key: 'deleteDetalle',
      target: event.target || new EventTarget(),
      message: MSG_CRUD.MSG_PREGUNTA_ELIMINAR,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {
    
        this.httpCoreService.delete(Endpoints.DeleteModule+item.iid_module).subscribe(res => {
          if (res.isSuccess) {
            this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ELIMINADA);
            this.loadDataModule(this.req);
          }
          else {
            this.commonService.HanddleErrorMessage(res);
          }
        })
    
      },
      reject: () => { }
    });
  }

//#endregion

  //#region OPTIONS

  loadDataOption(req:any){
    this.lstOptions =[];

    this.httpCoreService.post(req,Endpoints.GetListOption).subscribe(res => {
      if(res.isSuccess){
        this.lstOptions = res.data;       
        this.totalRecordOptions = res.iTotal_record;
      }
      else {
        this.commonService.HanddleErrorMessage(res);
      }
    })
  }

  saveOrEditOption(isEdit: boolean, data: any) {
    
    if(!isEdit){
      for (let c in this.formRegisterEditOption.controls) {
        this.formRegisterEditOption.controls[c].markAsTouched();
      }
      if (this.formRegisterEditOption.valid) {
      }
      else{
        return
      }
    }

    this.httpCoreService.post(data, Endpoints.RegisterOption).subscribe(res => {
        if (res.isSuccess) {
          this.formRegisterEditOption.reset();
          this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ACTUALIZADA_REGISTRADA);
          this.reqOptions.iid_module = data.iid_module;
          this.loadDataOption(this.reqOptions);
        } else {
          this.commonService.HanddleErrorMessage(res);
        }
    });

  }

  saveTableOption() {
    let value = this.formRegisterEditOption.value;

    let data: any = {
      iid_option: 0,
      iid_module: this.lsOptionsDto.iid_module,
      vname_option: value.txtName,
      vdescription_option: value.txtDescription,
      vurl_option: value.txtUrl,
      vicon_option: value.txtIcon,
      iorder_option: value.intOrder,
      bvisible_option: value.intVisible,

      istate_record: value.intState,
      iuser_token: 1
    };

    this.saveOrEditOption(false, data);
  }

  editOption(item: any) {
    let data: any = {
      ...item,
      // iid_option: this.lsOptionsDto.iid_option
    };

    this.saveOrEditOption(true, data);
  }

  deleteOption(event:any,item:any){
    this.confirmationService.confirm({
      key: 'deleteDetalle',
      target: event.target || new EventTarget(),
      message: MSG_CRUD.MSG_PREGUNTA_ELIMINAR,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {
    
        this.httpCoreService.delete(Endpoints.DeleteOption+item.iid_option).subscribe(res => {
          if (res.isSuccess) {
            this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ELIMINADA);
            this.reqOptions.iid_module = item.iid_module;
            this.loadDataOption(this.reqOptions);
          }
          else {
            this.commonService.HanddleErrorMessage(res);
          }
        })
    
      },
      reject: () => { }
    });
  }

  
  changePageOptions(event: any) {
    this.reqOptions.iindex = event.first;
    this.reqOptions.ilimit = event.rows;
    this.first = event.first;
    this.loadDataOption(this.reqOptions);
  }

  //#endregion


  //#region CB_ICONS

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

  //#endregion

  loadStateCB(){
    this.httpCoreService.getDataCb(this.paramTDState).subscribe(res => {
      if(res.isSuccess){
        this.lstState = res.data;
      }
    })
  }
}
