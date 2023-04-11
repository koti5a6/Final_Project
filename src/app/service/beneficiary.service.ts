import { Injectable } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiary } from '../model/beneficiary';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private http : HttpClient) { }


  saveBeneficiaryToDatabase(ben:Beneficiary):Observable<any>
  {
    return this.http.post<any>("http://localhost:9797/ben/addben",ben);
  }
  public getBenByUserId(id: number): Observable<Beneficiary[]> {
    console.log(id)
    return this.http.get<Beneficiary[]>(`http://localhost:9797/ben/getBenByUser/${id}`);
  }
}
