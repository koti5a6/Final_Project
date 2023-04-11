import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private readonly http: HttpClient) { }

  getCustomer(id : any){
    let url ='http://localhost:9797/transaction/';
    return this.http.get(`${url}${id}`);
  }
  


}

// https://jsonplaceholder.typicode.com/posts/
//:Observable (any)