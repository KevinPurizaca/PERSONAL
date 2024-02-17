import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    icon:string ='';


    constructor(public layoutService: LayoutService) 
    {
        let theme = localStorage.getItem('theme_admin') || 'lara-light-indigo';//sino existe lo cambiamos a tema por defecto
        this.icon =theme.includes('light')?'pi pi-sun':'pi pi-moon';

        const newColor =  theme.includes('light')? theme.replace('light','dark') : theme.replace('dark','light');//light':'dark';
        this.changeTheme(theme, newColor);

    }


    changeThemeDarkLight(){
        let theme = localStorage.getItem('theme_admin') || 'lara-light-indigo';//sino existe lo cambiamos a tema por defecto

        const newColor = theme.includes('light') ?'dark':'light';
        const newTheme = theme.includes('light') ? theme.replace('light','dark') : theme.replace('dark','light');

        localStorage.setItem('theme_admin',newTheme);
        this.icon =newTheme.includes('light') ?'pi pi-sun':'pi pi-moon';
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
