import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private httpcoreservice:HttpCoreService,
        private commonService: CommonService,
        )
     {       
     }

    login(){
        this.router.navigate(['/inicio/home']);

        // let req={
        //     vCorreo:'k@gmail.com',
        //     vPassword:'123456'
        // }
        // this.httpcoreservice.post(req,'Usuario/Login').subscribe((res:any)=>
        // {
        //     if(res.isSuccess){
        //         localStorage.setItem('token', "123456789abcdefghijklmnopqtrstuvwxyz");
        //         this.router.navigate(['/inicio/home']);
        //     }
        //     else{
        //         this.commonService.HanddleErrorMessage2(res.message);
        //     }
        // })
        

    }
}
