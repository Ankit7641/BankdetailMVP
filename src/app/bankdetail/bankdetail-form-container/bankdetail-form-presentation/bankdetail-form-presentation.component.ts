import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BankdetailService } from '../../bankdetail.service';
import { BankdetailFormPresenterService } from '../bankdetail-form-presenter/bankdetail-form-presenter.service';

@Component({
  selector: 'app-bankdetail-form-presentation',
  templateUrl: './bankdetail-form-presentation.component.html',
  styleUrls: ['./bankdetail-form-presentation.component.scss'],
  viewProviders: [BankdetailFormPresenterService]
})
export class BankdetailFormPresentationComponent implements OnInit {

  submitted = false;
  id = this.actRoute.snapshot.params['id'];
  
  //@Input() bank = { accountno: 0, name: '', email: '', phone: 0, bankname: '', gender: '', address: '', Amount: 0, currencycode: '' }

  @Output() bankdetailData: EventEmitter<any> = new EventEmitter();

  public bankdetailForm: FormGroup = this.BankdetailFormPresenterService.bindForm();

  constructor(
    private BankdetailFormPresenterService: BankdetailFormPresenterService,
    private restApi: BankdetailService,
    public actRoute: ActivatedRoute
  ) { 
    if (this.id) {
      debugger
      this.restApi.getBankdetail(this.id).subscribe((res:any)=>{
        console.log(res);
        this.bankdetailForm.patchValue(res)
        
      })
      
    }
  }

  ngOnInit(): void {

// It call data from BankdetailFormPresenterService
    this.BankdetailFormPresenterService.bankdetailData$.subscribe((bankdetailData: any) => {
      debugger
      console.log(bankdetailData)
      this.bankdetailData.emit(bankdetailData)
    })


  }
  
  // Control for [fromgroup]
  get bankdetailFormControl() {
    return this.bankdetailForm.controls;
    
  }
  

  // Clicking on submit buttom Data will come from form
  public onSubmit() {
    console.log(this.bankdetailForm.value);
    debugger
    this.BankdetailFormPresenterService.bankdetail(this.bankdetailForm)
   /*  this.restApi.addbankdetail(this.bank).pipe(map((res)=> {if(check==='female'){
      this.store=   this.bankForm.get('basic_amount').value * 20/100+this.bankForm.get('basic_amount').value;
          console.log()
    }else{
      this.bankForm.get('basic_amount').value
    }
  })).subscribe(res=>{
      alert('Added')
    })
  } */

  }
}
