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
                label: 'Home',
                items: [
                    { label: 'Dashboard',
                    icon: 'pi pi-fw pi-home', routerLink: ['/inicio/home']
                  
                  }
                ]
            },
            {
                label: '',
                items: [
                    { 
                    label: 'Administracion',
                    items:[
                        { label: 'Perfiles', icon: 'pi pi-user', routerLink: ['/clientes'] },
                        { label: 'Clientes', icon: 'pi pi-user', routerLink: ['/clientes'] },
                        { label: 'Usuarios', icon: 'pi pi-user', routerLink: ['/uikit/input'] },
                        { label: 'Tablas Auxiliar', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    ] },
                    
                ]
            },
            // {
            //     label: 'Administracion',
            //     items: [
            //         { label: 'Perfiles', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
            //         { label: 'Usuarios', icon: 'pi pi-user', routerLink: ['/uikit/input'] },
            //         { label: 'Tablas Auxiliar', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
            //     ]
            // },
            {
                label: '',
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

                  ];
    }
}
