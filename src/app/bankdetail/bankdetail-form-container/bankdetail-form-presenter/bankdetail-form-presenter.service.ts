import { Injectable, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Bankdetail } from '../../bankdetail.model';

@Injectable()
export class BankdetailFormPresenterService {

  public bankdetailData: Subject<any> = new Subject();
  public bankdetailData$: Observable<any>;

  constructor(private fb: FormBuilder) {
    this.bankdetailData$ = this.bankdetailData.asObservable();
  }
  public bindForm() {
    // Value wiil be bind from fromdata
    return this.fb.group({
      accountno: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneno: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      bankname: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      Amount: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      currencycode: new FormControl('', [Validators.required])

    });
    
  }

  public bindControlValue(bankform: FormGroup, bank: Bankdetail): FormGroup {
    debugger
    if (bank) {
      debugger
      bankform.patchValue(bank);
    }
    return bankform;
  } 

  // Data will get
  public bankdetail(bankdetailForm: FormGroup) {
    if (bankdetailForm.valid) {
      debugger
      console.log('done');
      this.bankdetailData.next(bankdetailForm.value);
      console.log(this.bankdetail);
    } else {
    }
  }
  
}