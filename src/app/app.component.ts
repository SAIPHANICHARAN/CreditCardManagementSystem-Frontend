import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sunkuBankUI';
  constructor(private router: Router) { }
  navigateToCreditCardReqForm(): void {
    this.router.navigate(['/creditcardreq']);
  }
}


