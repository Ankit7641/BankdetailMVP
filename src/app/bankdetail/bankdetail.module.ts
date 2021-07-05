import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankdetailRoutingModule } from './bankdetail-routing.module';
import { BankdetailComponent } from './bankdetail.component';
import { BankdetailFormContainerComponent } from './bankdetail-form-container/bankdetail-form-container.component';
import { BankdetailFormPresentationComponent } from './bankdetail-form-container/bankdetail-form-presentation/bankdetail-form-presentation.component';
import { BankdetailListContainerComponent } from './bankdetail-list-container/bankdetail-list-container.component';
import { BankdetailListPresentationComponent } from './bankdetail-list-container/bankdetail-list-presentation/bankdetail-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankdetailService } from './bankdetail.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './bankdetail-list-container/bankdetail-list-presentation/filter.pipe';


@NgModule({
  declarations: [
    BankdetailComponent,
    BankdetailFormContainerComponent,
    BankdetailFormPresentationComponent,
    BankdetailListContainerComponent,
    BankdetailListPresentationComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    BankdetailRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BankdetailService
  ]
})
export class BankdetailModule { }
