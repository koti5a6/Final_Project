import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { Loan } from '../model/loan';
import { LoanService } from '../service/loan.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  // loan=new Loan()
  // loan={} as Loan;
  loan = {
    loanId : 0,
    loanName : '',
    loanEmail : '',
    loanAccountNo :'' ,
   
    loanPhoneNo :'' ,
    loanAadharNo :  '',
    loanPanNo: '',
    loanType : '',
    loanAmount : '',
    loanAnnualIncome :'',
    address : '',
    status: '',
    
    user: {
      id:0
    }
  };

  constructor(private route:Router,private service:LoanService,private formBuilder : FormBuilder, private _router : Router) { }

  ngOnInit(): void {
  }


  loanDetail=new FormGroup({
    loanId:new FormControl(),
    loanName:new FormControl(''),
    loanEmail:new FormControl(''),
    loanAccountNo:new FormControl(),
    loanPhoneNo:new FormControl(),
    loanAadharNo:new FormControl(),
    loanPANNo:new FormControl(),
    loanType:new FormControl(''),
    loanAmount:new FormControl(),
    loanAnnualIncome:new FormControl(),
    address:new FormControl('')
  })
 

  applyLoan()
  {
    // this.loan.user.id=32;
    this.loan.user.id=Number(localStorage.getItem('uId'));


    this.service.saveLoanToDatabase(this.loan).subscribe(

      data=>{
              console.log("Loan applied successfully");
              alert("Loan applied ")
              this._router.navigate(['/home'])
             
            },
      error=>console.log("error")
    )
  }

  clearform(){
    this.loanDetail=new FormGroup({
    loanId:new FormControl(),
    loanName:new FormControl(''),
    loanEmail:new FormControl(''),
    loanAccountNo:new FormControl(),
    loanPhoneNo:new FormControl(),
    loanAadharNo:new FormControl(),
    loanPANNo:new FormControl(),
    loanType:new FormControl(''),
    loanAmount:new FormControl(),
    loanAnnualIncome:new FormControl(),
    address:new FormControl('')
    })
  }

 

}


