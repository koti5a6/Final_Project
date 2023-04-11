import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user =new User()
  msg='';

  constructor(private _service : RegistrationService, private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/login'])
      },
      error => {
        console.log("exception occured");
        alert("User already exists");
        // this.msg= error.error;
      }
      
    )
  }

}
