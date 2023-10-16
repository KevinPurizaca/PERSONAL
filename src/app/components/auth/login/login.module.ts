import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
  
      ButtonModule,
      CheckboxModule,
      InputTextModule,
      PasswordModule,
      MessagesModule,
      MessageModule,
      ToastModule,
  
      LoginRoutingModule,
    ],
    declarations: [
      LoginComponent,
    ],
    providers: []
  })
export class LoginModule { }
