import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy, DecimalPipe, CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { ProductService } from './service/product.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { MessageService, ConfirmationService, SharedModule} from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AuthenticationService } from './core/services/authentication.service';
import { ProductsComponent } from './views/maestras/products/products.component';
import { VentasComponent } from './views/maestras/ventas/ventas.component';

@NgModule({
  declarations: [
      AppComponent,
       NotfoundComponent  
  ],
  imports: [
      AppRoutingModule,
      AppLayoutModule,
      HttpClientModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      CoreModule
      
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: LocationStrategy, useClass: HashLocationStrategy },

      MessageService,
      DecimalPipe,
      ConfirmationService,
      AuthenticationService,
      ProductService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
