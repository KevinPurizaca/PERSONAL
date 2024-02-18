import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-portafolio-client',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './portafolio-client.component.html',
  styleUrl: './portafolio-client.component.scss'
})
export class PortafolioClientComponent implements OnInit {

  nameUser:string='Kevin Steiner Purizaca Pazo';
  job:string='Desarrollador Front-End.'


  lstHabilidades:any[]=[
    {id:'1',title:'Easy to Use'       ,subtitle:'Posuere morbi leo urna molestie.'            ,icon:'pi pi-fw pi-users'         ,colorFondoIcon:'text-yellow-700',colorIcon:'bg-yellow-200'},
    {id:'2',title:'Fresh Design'      ,subtitle:'Semper risus in hendrerit.'                  ,icon:'pi pi-fw pi-palette'       ,colorFondoIcon:'text-cyan-700',colorIcon:'bg-cyan-200'},
    {id:'3',title:'Well Documented'   ,subtitle:'Non arcu risus quis varius quam quisque.'    ,icon:'pi pi-fw pi-map'           ,colorFondoIcon:'text-indigo-700',colorIcon:'bg-indigo-200'},
    {id:'4',title:'Responsive Layout' ,subtitle:'Nulla malesuada pellentesque elit.'          ,icon:'pi pi-fw pi-id-card'       ,colorFondoIcon:'text-bluegray-700',colorIcon:' bg-bluegray-200'},
    {id:'5',title:'Clean Code'        ,subtitle:'Condimentum lacinia quis vel eros.'          ,icon:'pi pi-fw pi-star'          ,colorFondoIcon:'text-orange-700',colorIcon:'bg-orange-200'},
    {id:'6',title:'Dark Mode'         ,subtitle:'Convallis tellus id interdum velit laoreet.' ,icon:'pi pi-fw pi-moon'          ,colorFondoIcon:'text-pink-700',colorIcon:'bg-pink-200'},
    {id:'7',title:'Ready to Use'      ,subtitle:'Mauris sit amet massa vitae.'                ,icon:'pi pi-fw pi-shopping-cart' ,colorFondoIcon:'text-teal-700',colorIcon:'bg-teal-200'},
    {id:'8',title:'Modern Practices'  ,subtitle:'Elementum nibh tellus molestie nunc non.'    ,icon:'pi pi-fw pi-globe'         ,colorFondoIcon:'text-blue-700',colorIcon:'bg-blue-200'},
    {id:'9',title:'Privacy'           ,subtitle:'Neque egestas congue quisque.'               ,icon:'pi pi-fw pi-eye'           ,colorFondoIcon:'text-purple-700',colorIcon:'bg-purple-200'},

  ]

  lstProyectos:any[]=[
    {id:'1',title:'Congue Quisque Egestas',subtitle:'Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.',
    divPrincipal:'grid mt-8 pb-2 md:pb-2',divImagen:'flex justify-content-center bg-purple-100 lg:flex-order-0',
    divPrincipalIcono:'lg:text-right lg:align-items-end',
    divIcono:'bg-purple-200 lg:align-self-end',
    icono:'pi pi-fw pi-mobile text-purple-700',urlImagen:'assets/demo/images/landing/mockup.svg'},


    {id:'2',title:'Celerisque Eu Ultrices',subtitle:'Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.',
    divPrincipal:'grid my-8 pt-2 md:pt-2',divImagen:'flex justify-content-end sm:flex-order-2 bg-yellow-100',
    divPrincipalIcono:'lg:text-left lg:align-items-start',
    divIcono:'bg-yellow-200 lg:align-self-start',
    icono:'pi pi-fw pi-desktop text-yellow-700',urlImagen:'assets/demo/images/landing/mockup-desktop.svg'}

  ]

  icon:string ='';

  constructor(public layoutService: LayoutService, public router: Router) { }

  ngOnInit(): void {
    // let theme = localStorage.getItem('theme_client') || 'lara-light-indigo';//sino existe lo cambiamos a tema por defecto
    // this.icon =theme.includes('light')?'pi pi-sun':'pi pi-moon';

    // const newColor =  theme.includes('light')? theme.replace('light','dark') : theme.replace('dark','light');//light':'dark';
    // this.changeTheme(theme, newColor);

    let theme = localStorage.getItem('theme_client') ||'saga-blue';//sino existe lo cambiamos a tema por defecto
    this.icon = theme === 'saga-blue'?'pi pi-moon':'pi pi-sun';

    const newColor =  theme === 'saga-blue'? 'arya-blue': 'saga-blue';//light':'dark';
    this.changeTheme(theme, newColor);
  }


  changeThemeDarkLight(){
    // let theme = localStorage.getItem('theme_client') || 'lara-light-indigo';//sino existe lo cambiamos a tema por defecto

    // const newColor = theme.includes('light') ?'dark':'light';
    // const newTheme = theme.includes('light') ? theme.replace('light','dark') : theme.replace('dark','light');

    // localStorage.setItem('theme_client',newTheme);
    // this.icon =newTheme.includes('light') ?'pi pi-sun':'pi pi-moon';
    // this.changeTheme(newTheme, newColor);

    let theme = localStorage.getItem('theme_client') ||'saga-blue';//sino existe lo cambiamos a tema por defecto

    const newColor = theme === 'saga-blue' ?'dark':'light';
    const newTheme = theme === 'saga-blue' ? 'arya-blue' : 'saga-blue';

    localStorage.setItem('theme_client',newTheme);
    this.icon = newTheme === 'saga-blue' ?'pi pi-moon':'pi pi-sun';
    this.changeTheme(newTheme, newColor);

}

set theme(val: string) {
    this.layoutService.config.update((config) => ({
        ...config,
        theme: val,
    }));
}
get theme(): string {
    return this.layoutService.config().theme;
}

set colorScheme(val: string) {
    this.layoutService.config.update((config) => ({
        ...config,
        colorScheme: val,
    }));
}
get colorScheme(): string {
    return this.layoutService.config().colorScheme;
}

changeTheme(theme: string, colorScheme: string) {
    this.theme = theme;
    this.colorScheme = colorScheme;
}
}
