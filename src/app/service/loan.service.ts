import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../model/loan';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
 loanList!:any;
  
  constructor(private http : HttpClient) {
    // this.getLoanByAccount(this.loanList).subscribe(
    //   (data)=>{
    //     this.loanList = data;
    //     console.log(data, "customer service");
        
    //   },
    //   (error)=>{
    //     console.log(error);
        
    //   }
    // )
    }
  saveLoanToDatabase(loan:Loan):Observable<any>
  {
    return this.http.post<any>("http://localhost:9797/loan/applyLoan",loan);
  }
 
  public getLoanByUserId(id: number): Observable<Loan[]> {
    console.log(id)
    return this.http.get<Loan[]>(`http://localhost:9797/loan/getLoanByUser/${id}`);
  }
}
