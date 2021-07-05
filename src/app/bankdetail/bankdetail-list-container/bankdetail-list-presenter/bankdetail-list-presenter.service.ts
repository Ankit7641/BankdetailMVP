import { Injectable, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Bankdetail } from '../../bankdetail.model';
import { BankdetailService } from '../../bankdetail.service';

@Injectable()
export class BankdetailListPresenterService {

  public bankdetailId: Subject<any> = new Subject();
  public bankdetailId$!: Observable<any>;
  bankdetail: any = [];


  constructor(public restApi: BankdetailService) {
    this.bankdetailId$ = this.bankdetailId.asObservable();
  }

  public bindForm() {
    return new FormGroup({
      accountno: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phoneno: new FormControl(),
      bankname: new FormControl(),
      gender: new FormControl(),
      address: new FormControl(),
      Amount: new FormControl(),
      currencycode: new FormControl()

    });
  }
  // Display data in List
  public loadbankdetail(id: string) {
    return this.restApi.getbankdetails().subscribe((data: any) => {
      this.bankdetail = data;
    })

  }


  // Delete Bank detail 
  public deleteBankdetail(id: number) {
    debugger
    console.log('delete', id);
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteBankdetail(id).subscribe(data => {
        // this.loadbankdetail()
      })
    }
  }
}
