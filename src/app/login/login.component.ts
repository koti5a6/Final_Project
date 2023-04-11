import { Component, OnInit } from '@angular/core';


import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../model/user';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user =new User();
   msg='';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        //console.log(data.accountno);
     // localStorage.setItem('accountNo',data.accountNo)
      localStorage.setItem('uId',data.id)
       this._router.navigate(['/home'])
      },
      error => {console.log ("exception occured");
      this.msg="Bad Credentials, please enter valid emailid and password"
    }

    )
  }

  gotoregistration(){
    this._router.navigate(['/register'])
  }

}
