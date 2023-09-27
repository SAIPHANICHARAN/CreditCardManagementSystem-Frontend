import { Component, OnInit } from '@angular/core';
import { CrediCardRequest } from '../model/creditCardRequest';
import { CreditCardRequestServiceService } from '../service/credit-card-request-service.service';


@Component({
  selector: 'app-credit-card-request',
  templateUrl: './credit-card-request.component.html',
  styleUrls: ['./credit-card-request.component.css']
})
export class CreditCardRequestComponent implements OnInit {

  crediCardReq : CrediCardRequest = { customerId: '', agentId: '',requestedDate : '',cardType: '' };

  constructor(public creditCardRequestServiceService : CreditCardRequestServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("form submitted" + this.crediCardReq);
    this.creditCardRequestServiceService.sendCreditCardReq(this.crediCardReq);

  }
}
