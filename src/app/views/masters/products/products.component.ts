import { Component, OnInit } from '@angular/core';
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


  ngOnInit(): void {}
  
  constructor() { }


}






