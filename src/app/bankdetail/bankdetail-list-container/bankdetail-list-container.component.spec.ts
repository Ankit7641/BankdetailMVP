import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailListContainerComponent } from './bankdetail-list-container.component';

describe('BankdetailListContainerComponent', () => {
  let component: BankdetailListContainerComponent;
  let fixture: ComponentFixture<BankdetailListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
