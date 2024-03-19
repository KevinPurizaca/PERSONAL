import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MESSAGE_EMPTY, MESSAGE_SELECT } from 'src/app/core/config/mensajes';
import { PATTERNS, ROWS_DEFAULT, ROWS_OPTIONS } from 'src/app/core/config/options';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { ComboModel } from 'src/app/core/util/combo';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  selector: 'app-users',
  standalone: true,
   imports: [
    SharedModule
   ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  formSearch:FormGroup;
  formRegisterEdit:FormGroup;

  vmessageEmpty : string=MESSAGE_EMPTY;
  vmessageSelect : string=MESSAGE_SELECT;

  lstProfile :ComboModel[]=[];
  lstStatus :ComboModel[]=[];
  lstDepartment :ComboModel[]=[];
  lstTipeDocument :ComboModel[]=[];

  lstUsers:any[]=[];
  
  lsUserDto!:any ;

  titleEditRegisterUser:string ='';


  vmEditRegisterUser:boolean = false;
  submitted: boolean = false;

  totalRecord:number = 0;
  first:number = 0;
  rowsDefault: number = ROWS_DEFAULT;
  rowsOptions: any[] = ROWS_OPTIONS;

  req ={ 
    iid_user: -1,
    vcode: "",
    vfirst_name: "",
    vlast_name: "",
    vemail: "",
    inumber_document: -1,
    itype_document: -1,
    iphone: -1,
    vaddress: "",
    iid_department: -1,
    iid_profile: -1,
    istate_record: -1,
    iindex: 0,
    ilimit: ROWS_DEFAULT,
  }

  constructor(
    fs:FormBuilder,
    fre:FormBuilder,
    private httpCoreService: HttpCoreService,

    )
  {
    this.formSearch = fs.group({
      txtFirstName:['',[Validators.pattern(PATTERNS.Letras)]],
      txtLastName:['',[Validators.pattern(PATTERNS.Letras)]],
      intProfile:[-1],
      intStatus:[-1],
      txtPhoneNumber:[null,[Validators.pattern(PATTERNS.Numeros)]],
      txtEmail:[''],
      intDepartment:[-1],
      txtDocumentNumber:[null,[Validators.pattern(PATTERNS.Numeros)]],
      });

      this.formRegisterEdit = fre.group({
        txtFirstName:['',[Validators.pattern(PATTERNS.Letras), Validators.required]],
        txtLastName:['',[Validators.pattern(PATTERNS.Letras), Validators.required]],
        intProfile:[-1],
        intStatus:[-1],
        txtPhoneNumber:[null,[Validators.pattern(PATTERNS.Numeros), Validators.required]],
        txtEmail:['',[Validators.pattern(PATTERNS.Email), Validators.required]],
        intDepartment:[-1],
        txtDocumentNumber:[null,[Validators.pattern(PATTERNS.Numeros), Validators.required]],
        intTipeDocument:[-1],

        });
      
  }

  ngOnInit(): void {
    this.loadData(this.req)
  }


  viewModal(type:number,item:any){
    //Tipe 1 == Mode Register / Tipe 2 == Mode Edit
    switch(type){
      case 1:
        this.formRegisterEdit.markAsUntouched();
        this.formRegisterEdit.reset();        
        this.lsUserDto = {};
        this.lsUserDto.iid_usuario = 0;
        this.titleEditRegisterUser = "Registrar Usuario"
        this.vmEditRegisterUser = true;
        break;
      case 2 :
        this.titleEditRegisterUser = "Editar Usuario"
        this.lsUserDto = item;
        this.vmEditRegisterUser = true;
        break;
    }
  }

  saveUser(){
    this.submitted = true;

    let value = this.formRegisterEdit.value;
    for (let c in this.formRegisterEdit.controls) {
      this.formRegisterEdit.controls[c].markAsTouched();
    }

    if (this.formRegisterEdit.valid) {
  }
  }

  loadData(req:any){
    this.httpCoreService.post(req,'/Masters/Users/GetListUsers').subscribe(res =>{

      if(res.isSuccess){
        this.lstUsers = res.data;       
        this.totalRecord = res.iTotal_record;
      }
    });
  }
}
