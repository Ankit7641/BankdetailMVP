import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Bankdetail } from './bankdetail.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankdetailService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient,
    ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Get List Of Bank Detail 
  public getbankdetails(): Observable<Bankdetail> {
    console.log(Bankdetail)
    return this.http.get<Bankdetail>(this.apiURL + '/bank')
  }

  // Add Bank Detail
  public addbankdetail(bank: Bankdetail): Observable<Bankdetail> {
    return this.http.post<Bankdetail>(this.apiURL + '/bank/', bank)

  }


  // Delete Bank Detail by ID
  public deleteBankdetail(id: number) {
    return this.http.delete<Bankdetail>(this.apiURL + '/bank/' + id)

  }

  // Get Method to fetch Data
  getEmployee(id: string): Observable<Bankdetail> {
    return this.http.get<Bankdetail>(this.apiURL + '/bank/' + id)
  }

  // Update Bank Detail
  updateBankdetail(id: string, bank: any): Observable<Bankdetail> {
    return this.http.put<Bankdetail>(this.apiURL + '/bank/' + id, (bank))
  }
}