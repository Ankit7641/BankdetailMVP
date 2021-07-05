import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BankdetailFormPresenterService } from '../bankdetail-form-presenter/bankdetail-form-presenter.service';

@Component({
  selector: 'app-bankdetail-form-presentation',
  templateUrl: './bankdetail-form-presentation.component.html',
  styleUrls: ['./bankdetail-form-presentation.component.scss'],
  viewProviders: [BankdetailFormPresenterService]
})
export class BankdetailFormPresentationComponent implements OnInit {

  submitted = false;

  @Output() bankdetailData: EventEmitter<any> = new EventEmitter();

  public bankdetailForm: FormGroup = this.BankdetailFormPresenterService.bindForm();

  constructor(
    private BankdetailFormPresenterService: BankdetailFormPresenterService
  ) { }

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
  }

}
