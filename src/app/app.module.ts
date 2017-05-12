import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ServiceRequestComponent } from './ServiceRequest/ServiceRequest.component';


import { ServiceRequestService } from './ServiceRequest/ServiceRequest.service';


@NgModule({
  declarations: [
    AppComponent,
    // TransactionComponent,
    
    ServiceRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService,
    ServiceRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
