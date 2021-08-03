import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Bankdetail } from '../bankdetail.model';
import { BankdetailModule } from '../bankdetail.module';
import { BankdetailService } from '../bankdetail.service';

@Component({
  selector: 'app-bankdetail-form-container',
  templateUrl: './bankdetail-form-container.component.html',
  styleUrls: ['./bankdetail-form-container.component.scss']
})
export class BankdetailFormContainerComponent implements OnInit {


  id = this.actRoute.snapshot.params['id'];
 // @Input() bankdetailData = { accountno: 0, name: '', email: '', phone: 0, bankname: '', gender: '', address: '', Amount: 0, currencycode: '' }

  constructor(
    private restApi: BankdetailService,
    private router: Router,
    private location: Location,
    public actRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

/*   public updateBankdetail(bank: Bankdetail): void {

    this.restApi.getbankdetails().subscribe((data: {}) => {
      this.bankdetailData = data;
    })

   
  } */
  
  // Data will add to addbankdetailservice
  public addbankdetail(bank: Bankdetail) {
    if(this.id){
      debugger
      this.restApi.updateBankdetail(this.id,bank).subscribe(()=>{
      })
    }
    else
    {
    debugger
    this.restApi.addbankdetail(bank).subscribe((bank: any) => {
      this.restApi.getbankdetails();
      this.location.back();
    })
    console.log(bank);
  }

  }


}