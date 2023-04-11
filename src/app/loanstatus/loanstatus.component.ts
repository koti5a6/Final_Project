import { Component, OnInit } from '@angular/core';
import { LoanService } from '../service/loan.service';
import { Loan } from '../model/loan';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-loanstatus',
  templateUrl: './loanstatus.component.html',
   styleUrls: ['./loanstatus.component.css']
 })
export class LoanstatusComponent implements OnInit {
  loan = {
    loanId : 0,
    loanName : '',
    loanEmail : '',
    loanAccountNo :'' ,
   
    loanPhoneNo :'' ,
    loanAadharNo :  '',
    loanPanNo: 0,
    loanType : '',
    loanAmount : 0,
    loanAnnualIncome :0,
    address : '',
    status: '',
    
    user: {
      id:0
    },
   
  };
 loanview: Loan[]=[] ;
  
  uId!:number;
  
  displayedColumns: string[] =['loanId','loanName','loanEmail','address','loanPhoneNo','loanType','status'];
  dataSource!:any;

    
   constructor(public loanService:LoanService, private _router:Router ,private _route:ActivatedRoute) { }
   
   ngOnInit(): void {
   
    this.uId= this._route.snapshot.params['id'];
    
    this.loanService.getLoanByUserId(this.loan.user.id=Number(localStorage.getItem('uId'))).subscribe(
      data=>{
        //this.loanview=data
        this.dataSource = data;
         console.log("loan details "+data)
        
      },
      err=>{
        console.log("err")
      }
    )

   }
  //  onSubmit(form: NgForm) {
    
     
    
  //  }
  // getLoanById(){
    
  //   this.loanService.getLoanByUserId(this.loan.user.id=Number(localStorage.getItem('uId'))).subscribe(
  //     data=>{
  //       console.log("loan details ")
  //     },
  //     err=>{
  //       console.log("err")
  //     }
  //   )
  // }
  
 
 }



