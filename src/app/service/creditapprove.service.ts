import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditapproveService {

  customerList!:any;
  public baseUrl = environment.apiUrl;
  constructor(public http:HttpClient) { 
    this.getCardList().subscribe(
      (data)=>{
        this.customerList = data;
        console.log(data, "credit service");
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  public getCardList(){
    return this.http.get(`${this.baseUrl}/card/get-list`);
  }

  public updateCard(cardData:any){
    console.log("update card method in service", cardData);
    return this.http.put(`${this.baseUrl}/card/update-card`,cardData).subscribe(
      (data)=>{
        console.log(data,"data");
      }
    )
  }
}
