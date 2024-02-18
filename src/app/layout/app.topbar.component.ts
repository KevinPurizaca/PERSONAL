import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];
    items2: MenuItem[] | undefined;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    icon:string ='';


    constructor(public layoutService: LayoutService) 
    {
        let theme = localStorage.getItem('theme_admin') ||'saga-blue';//sino existe lo cambiamos a tema por defecto
        this.icon = theme === 'saga-blue'?'pi pi-moon':'pi pi-sun';

        const newColor =  theme === 'saga-blue'? 'light': 'dark';//light':'dark';
        this.changeTheme(theme, newColor);

        this.getMenu();
    }

    getMenu(){
        this.items2 = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp'
                    }
                ]
            }
        ]
    }
    changeTheme(theme: string, colorScheme: string) {
       
        this.theme = theme;
        this.colorScheme = colorScheme;
    }
    changeThemeDarkLight(){
        let theme = localStorage.getItem('theme_admin') ||'saga-blue';//sino existe lo cambiamos a tema por defecto

        const newColor = theme === 'saga-blue' ?'dark':'light';
        const newTheme = theme === 'saga-blue' ? 'arya-blue' : 'saga-blue';

        localStorage.setItem('theme_admin',newTheme);
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

    

}
