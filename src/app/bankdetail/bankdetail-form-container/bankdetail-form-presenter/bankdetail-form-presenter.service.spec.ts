import { TestBed } from '@angular/core/testing';

import { BankdetailFormPresenterService } from './bankdetail-form-presenter.service';

describe('BankdetailFormPresenterService', () => {
  let service: BankdetailFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankdetailFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
