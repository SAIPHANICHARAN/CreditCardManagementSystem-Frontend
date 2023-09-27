import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { CrediCardRequest } from '../model/creditCardRequest';



@Injectable({
  providedIn: 'root'
})
export class CreditCardRequestServiceService {

  constructor(private http: HttpClient) { }

  

  sendCreditCardReq(creditcardreq:CrediCardRequest){
    console.log('inside grtBankOwnerDetailsWithPAthVariable')
    return this.http.post<string>(`${API_URL}/ccms/request/creditcard`,creditcardreq)
  }

  getBasicAuthHeaderVal(): HttpHeaders{

    let header = new HttpHeaders({
      channleId:"CRMS"
    })
    return header
  }
}
