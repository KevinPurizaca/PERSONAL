import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { Endpoints } from 'src/app/core/config/endpoints';
import { MESSAGE_EMPTY, MESSAGE_SELECT, MSG_CRUD } from 'src/app/core/config/mensajes';
import { ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
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
  formRegisterEditTableHeadboard:FormGroup;

  lstTableHeadboard:any[]=[];


  lsTableHeadboardDto!:any ;
  titleEditRegisterTableHeadboard:string ='';
  vmEditRegisterTableHeadboard:boolean = false;
  submitted: boolean = false;

  lstState:ComboModel[]=[];

  totalRecord:number = 0;
  first:number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  vMessageEmpty : string=MESSAGE_EMPTY;
  vMessageSelect : string=MESSAGE_SELECT;

  req ={
    iid_table_headboard:-1,
    vdescription:'',
    istate_record:-1,
    iindex: 0,
    ilimit: ROWS_DEFAULT
  }

  constructor(
    fs:FormBuilder,
    fr:FormBuilder,
    private httpCoreService: HttpCoreService,
    private commonService: CommonService,
    private confirmationService: ConfirmationService,
  ){
    this.formSearch = fs.group({
      txtDescription :[''],
      intState:[-1]
    });

    this.formRegisterEditTableHeadboard = fr.group({
      txtDescription :['',[Validators.required]],
      intState:[-1/*,[Validators.required]*/]
    });
    
  }

  ngOnInit(): void {
    this.loadDataTableHeadboard(this.req);
    
  }

  viewModal(type:number,item:any){
    console.log("item:", item)
    //Tipe 1 == Mode Register / Tipe 2 == Mode Edit
    switch(type){
      case 1:
        this.formRegisterEditTableHeadboard.markAsUntouched();
        this.formRegisterEditTableHeadboard.reset();        
        this.lsTableHeadboardDto = {};
        this.lsTableHeadboardDto.iid_table_headboard = 0;
        this.titleEditRegisterTableHeadboard = "Registrar Tabla Cabecera"
        this.vmEditRegisterTableHeadboard = true;
        break;
      case 2 :
        this.titleEditRegisterTableHeadboard = "Editar Tabla Cabecera"
        this.lsTableHeadboardDto = item;
        this.vmEditRegisterTableHeadboard = true;
        break;
    }
  }

  loadDataTableHeadboard(req:any){
    this.lstTableHeadboard = [];
    this.httpCoreService.post(req,Endpoints.GetListTableHead).subscribe(res => {
      if(res.isSuccess){
        this.lstTableHeadboard = res.data;       
        this.totalRecord = res.iTotal_record;
      }
      else {
        this.commonService.HanddleErrorMessage(res);
      }
    })
  }

  saveTableHeadboard(){
    this.submitted = true;

    let value = this.formRegisterEditTableHeadboard.value;
    for (let c in this.formRegisterEditTableHeadboard.controls) {
      this.formRegisterEditTableHeadboard.controls[c].markAsTouched();
    }

    if (this.formRegisterEditTableHeadboard.valid) {
      let req ={
        iid_table_headboard: this.lsTableHeadboardDto.iid_table_headboard,
        vdescription:value.txtDescription,
        istate_record:1,
        iuser_token:1
      }
      this.httpCoreService.post(req,Endpoints.RegisterTableHead).subscribe(res => {
        if(res.isSuccess){
          this.loadDataTableHeadboard(this.req);
          this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ACTUALIZADA_REGISTRADA);
          this.vmEditRegisterTableHeadboard = false;
        }
        else {
          this.commonService.HanddleErrorMessage(res);
        }
      })
    }
  }

  changePageTableHeadboard(event: any) {
    this.req.iindex = event.first;
    this.req.ilimit = event.rows;
    this.first = event.first;
    this.loadDataTableHeadboard(this.req);
  }

  deleteTableHeadboard(event: any, item: any) {
    
    this.confirmationService.confirm({
      key: 'deleteDetalle',
      target: event.target || new EventTarget(),
      message: MSG_CRUD.MSG_PREGUNTA_ELIMINAR,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {
    
        this.httpCoreService.delete(Endpoints.DeleteTableHead+'?iid_table_headboard='+item.iid_table_headboard).subscribe(res => {
          if (res.isSuccess) {
            this.commonService.HanddleInfoMessage(MSG_CRUD.MSG_ELIMINADA);
            this.loadDataTableHeadboard(this.req);
          }
          else {
            this.commonService.HanddleErrorMessage(res);
          }
        })
    
      },
      reject: () => { }
    });
  }
}
