import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http : HttpClient) { }

  saveCardToDatabase(card:Card):Observable<any>
  {
    return this.http.post<any>("http://localhost:9797/card/applyCard",card);
  }

  public getCardByUserId(id: number): Observable<Card[]> {
    console.log(id)
    return this.http.get<Card[]>(`http://localhost:9797/card/getCardByUser/${id}`);
  }
}