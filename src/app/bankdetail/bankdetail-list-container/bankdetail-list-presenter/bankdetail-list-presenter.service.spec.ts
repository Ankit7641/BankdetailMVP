import { TestBed } from '@angular/core/testing';

import { BankdetailListPresenterService } from './bankdetail-list-presenter.service';

describe('BankdetailListPresenterService', () => {
  let service: BankdetailListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankdetailListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
