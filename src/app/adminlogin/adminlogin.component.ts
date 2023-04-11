import { Component, OnInit } from '@angular/core';
import { Adminlogin } from '../model/adminlogin';
import { AdminloginService } from '../service/adminlogin.service';
import { NgModel } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin: Adminlogin = new Adminlogin();

  constructor(private loginadminservice:AdminloginService , private _router : Router) { }

  ngOnInit(): void {
  }
  adminLogin() {
    console.log(this.admin)
    this.loginadminservice.adminUser(this.admin).subscribe((data: any) => {
      alert("Login success")
      this._router.navigate(['/admindash'])

    },(error: any)=>alert("Incorrect data"))
  }


}
