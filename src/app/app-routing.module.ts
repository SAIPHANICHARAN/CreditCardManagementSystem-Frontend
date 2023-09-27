import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardRequestComponent } from './credit-card-request/credit-card-request.component';

const routes: Routes = [
  {path:'creditcardreq',component:CreditCardRequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
