import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList!:any;
  public baseUrl = environment.apiUrl;


  constructor(public http:HttpClient) { 
    this.getList().subscribe(
      (data)=>{
        this.customerList = data;
        console.log(data, "customer service");
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  public getList(){
    return this.http.get(`${this.baseUrl}/get-list`);
  }

}
