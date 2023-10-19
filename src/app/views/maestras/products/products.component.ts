import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  letrasPattern = "[a-zA-ZáéíóúÁÉÍÓÚ ]*"
  numerosPattern = "[0-9]*"
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  letrasynros = "[a-zA-Z0-9 ]*"

  formBusqueda: FormGroup;

  lstProductos:any[] =[];
  totalRecord:number=0;

  req={
    iidProducto  : -1,
    vNombre : "",
    vCodigo : "",
    iidMarca : -1,
    iidCategoria :-1 ,
    iidProveedor : -1,
    iEstado : -1,
    pageNum : 0,
    pageSize :5 ,
  }

  constructor(   
     fb: FormBuilder,
     private httpcoreservice:HttpCoreService,
     private commonService: CommonService,

    ){
      this.formBusqueda = fb.group({
        cboPerfil: [-1],
        cboSucursal: [-1],//
        cboTipoDocumento: [-1],
        txtNumeroDocumento: [''],
        cboEstado: [-1],
        txtNombre: ['', [Validators.pattern(this.letrasPattern)]],
        txtApellidoPaterno: ['', [Validators.pattern(this.letrasPattern)]],
        txtApellidoMaterno: ['', [Validators.pattern(this.letrasPattern)]],
      });
  }
  ngOnInit(): void {
    this.loadData(this.req);    
  }

  loadData(req:any){
    this.httpcoreservice.post(req,'Producto/ListarProductos').subscribe( (res:any)=>{
      if(res.isSuccess){
        this.lstProductos = res.data;
        this.totalRecord = res.totalRecord;
      }
      else
      this.commonService.HanddleErrorMessage(res);
    }     
    )
  }
  buscar(){}
  newUsuario(){}
  limpiarFrm(){}
}
