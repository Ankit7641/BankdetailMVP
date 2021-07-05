import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailFormPresentationComponent } from './bankdetail-form-presentation.component';

describe('BankdetailFormPresentationComponent', () => {
  let component: BankdetailFormPresentationComponent;
  let fixture: ComponentFixture<BankdetailFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
