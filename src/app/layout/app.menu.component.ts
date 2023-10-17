import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: '',
                items: [
                    { label: 'Dashboard',
                    icon: 'pi pi-fw pi-home', routerLink: ['/inicio/home']
                  
                  }
                ]
            },
            {                
                items: [
                    { 
                    label: 'Administracion',
                    items:[
                        { label: 'Perfiles', icon: 'pi pi-user', routerLink: ['/administracion/perfiles'] },
                        { label: 'Usuarios', icon: 'pi pi-user', routerLink: ['/administracion/usuarios'] },
                        { label: 'Tablas Auxiliar', icon: 'pi pi-fw pi-bookmark', routerLink: ['/administracion/tabla-auxiliar'] },
                    ] },
                    
                ]
            },
            {                
                items: [
                    {
                        label: 'Maestras',                       
                        items:[
                            { label: 'Productos', icon: 'pi pi-fw pi-id-card', routerLink: ['/maestras/products'] },
                            { label: 'Categorias', icon: 'pi pi-fw pi-id-card', routerLink: ['/maestras/categories'] },
                            { label: 'Marcas', icon: 'pi pi-fw pi-id-card', routerLink: ['/maestras/marcas'] },
                            { label: 'Proveedores', icon: 'pi pi-user', routerLink: ['/maestras/proveedores'] },
                            { label: 'Clientes', icon: 'pi pi-user', routerLink: ['/maestras/clientes'] },
                        ],
                    }      
               ]
            },
            {
                label: '',
                items: [
                    { label: 'Ventas',
                    icon: 'pi pi-fw pi-home', routerLink: ['/maestras/ventas']
                  
                  }
                ]
            },
            {                
                items: [
                    { 
                    label: 'Reportes',
                    items:[
                        { label: 'Reporte 1', icon: 'pi pi-user', routerLink: ['/administracion/perfiales'] },
                        { label: 'Reporte 2', icon: 'pi pi-user', routerLink: ['/administracion/usuaraios'] },
                        { label: 'Reporte 3', icon: 'pi pi-fw pi-bookmark', routerLink: ['/administracion/tabla-aauxiliar'] },
                    ] },
                    
                ]
            },
        ];
    }
}
