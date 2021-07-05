import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailFormContainerComponent } from './bankdetail-form-container.component';

describe('BankdetailFormContainerComponent', () => {
  let component: BankdetailFormContainerComponent;
  let fixture: ComponentFixture<BankdetailFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
