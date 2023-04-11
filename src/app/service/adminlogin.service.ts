import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Adminlogin } from '../model/adminlogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  private baseUrl = "http://localhost:9797/admin/login";

  constructor(private httpClient: HttpClient) { }
  adminUser(admin: Adminlogin): Observable<object> {
    console.log(admin)
    return this.httpClient.post<any>(`${this.baseUrl}`, admin);
  }
}
