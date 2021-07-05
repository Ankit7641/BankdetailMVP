import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BankdetailListPresenterService } from './bankdetail-list-presenter/bankdetail-list-presenter.service';
import { BankdetailService } from '../bankdetail.service';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bankdetail-list-container',
  templateUrl: './bankdetail-list-container.component.html',
  styleUrls: ['./bankdetail-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [BankdetailListPresenterService]
})
export class BankdetailListContainerComponent implements OnInit {

  public bankdetailList$: Observable<any> = of();
  bankdetailList: any;

  constructor(
    private bankdetailservice: BankdetailService,
    private location: Location
  ) {
    this.bankdetailList$ = this.bankdetailservice.getbankdetails();
  }

  ngOnInit(): void {
  }
  // DAta will be deleted
  public onDeleteId(id: number) {
    this.bankdetailservice.deleteBankdetail(id)
    this.location.back();
  }
}
