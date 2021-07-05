import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Bankdetail } from '../../bankdetail.model';
import { BankdetailListPresenterService } from '../bankdetail-list-presenter/bankdetail-list-presenter.service';

@Component({
  selector: 'app-bankdetail-list-presentation',
  templateUrl: './bankdetail-list-presentation.component.html',
  styleUrls: ['./bankdetail-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [BankdetailListPresenterService]
})
export class BankdetailListPresentationComponent implements OnInit {

  searchText!: string;

  @Input() public set bankdetailList(id: Bankdetail[]) {
    if (id) {
      this._bankdetailList = id
    }
  }

  public get bankdetailList(): Bankdetail[] {
    return this._bankdetailList
  }

  @Output() public deleteId: EventEmitter<any> = new EventEmitter();

  private _bankdetailList: Bankdetail[] = [];
  public bankGroup: FormGroup;

  constructor(
    private bankdetaillistpresenterservice: BankdetailListPresenterService
  ) {
    this.bankdetailList = [];
    this.bankGroup = this.bankdetaillistpresenterservice.bindForm();
  }

  ngOnInit(): void {
    this.bankdetaillistpresenterservice.bankdetailId$.subscribe((bankdetailId) => {
      this.deleteId.emit(bankdetailId);
    });
  }

  public deleteBankdetail(id: number) {
    this.bankdetaillistpresenterservice.deleteBankdetail(id)
  }


}
