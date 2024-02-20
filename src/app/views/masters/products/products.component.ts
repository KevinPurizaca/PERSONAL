import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

interface Resultado {
  nombre: string;
  cantidad: number;
}
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

  ngOnInit(): void {
    
  }
  
  resultados: Resultado[] = [];

  constructor() { }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.readFile(file);
    }
  }

  readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const contenido = reader.result as string;
      this.procesarDatos(contenido);
    };
    reader.readAsText(file);
  }

  procesarDatos(data: string): void {
    const lineas = data.split('\n');
    const resultadosTemp: { [nombre: string]: number } = {};

    lineas.forEach(linea => {
      const nombre = this.obtenerIzquierda(linea);
      resultadosTemp[nombre] = (resultadosTemp[nombre] || 0) + 1;
    });

    this.resultados = Object.keys(resultadosTemp).map(nombre => ({
      nombre,
      cantidad: resultadosTemp[nombre]
    }));
    this.resultados.sort((a, b) => b.cantidad - a.cantidad);


    // Ordenar la lista de resultados de mayor a menor
    const mayorNumero = this.resultados.length > 0 ? this.resultados[0].cantidad : 0;

    // Calcular el 70% del mayor número y crear un nuevo objeto de usuario
    const cantidadUsuario = Math.round(mayorNumero * 0.5);
    const nuevoUsuario = { nombre: 'KeSte_Gamer', cantidad: cantidadUsuario };
    this.resultados.push(nuevoUsuario);

    this.resultados.sort((a, b) => b.cantidad - a.cantidad);

  }

  obtenerIzquierda(linea: string): string {
    if (linea.includes(':')) {
      return linea.split(':')[0].trim();
    } else {
      return linea.trim();
    }
  }
}
