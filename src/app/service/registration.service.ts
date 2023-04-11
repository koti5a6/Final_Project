import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient, private router:Router) { }


  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:9797/login", user)
  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:9797/registeruser",user);
  }
  logout() {
    localStorage.clear();
    alert("Logged out successfully");
    this.router.navigate(['/project']);
  }
}
