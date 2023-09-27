import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardRequestComponent } from './credit-card-request.component';

describe('CreditCardRequestComponent', () => {
  let component: CreditCardRequestComponent;
  let fixture: ComponentFixture<CreditCardRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
