import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ServiceRequestComponent } from './ServiceRequest/ServiceRequest.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },

    { path: 'ServiceRequest', component: ServiceRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
