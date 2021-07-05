import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailListPresentationComponent } from './bankdetail-list-presentation.component';

describe('BankdetailListPresentationComponent', () => {
  let component: BankdetailListPresentationComponent;
  let fixture: ComponentFixture<BankdetailListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
