import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ManagerService } from '../service/manager.service';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private managerService : ManagerService, private _router:Router) { }
  customer: any;
  account:any;
  transaction: any;
  details:any;
  bank:any;
  
  ngOnInit(): void {


  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
     
     
      return ;
    }
    
    else{
this.managerService.getCustomer(form.value.id).subscribe(data => {this.details=data;this.customer = this.details.accountDetails.customer;
  this.bank = this.details.accountDetails.bankDetails;
  this.transaction = this.details.transactions;this.account=this.details.accountDetails.account;

console.log(this.details.transactions)});

//console.log(data)});

    }
  }
}