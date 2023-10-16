import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
      AppComponent, NotfoundComponent
  ],
  imports: [
      AppRoutingModule,
      AppLayoutModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      // CountryService, CustomerService, EventService, IconService, NodeService,
      // PhotoService, 
      ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
