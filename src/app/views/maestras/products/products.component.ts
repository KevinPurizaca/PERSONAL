import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(    fb: FormBuilder,
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
    
  }
  buscar(){}
  newUsuario(){}
  limpiarFrm(){}
}
