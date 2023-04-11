import { Component, OnInit } from '@angular/core';
import { LoanapproveService } from '../service/loanapprove.service';
import { Loan } from '../model/loan';
@Component({
  selector: 'app-loanapprove',
  templateUrl: './loanapprove.component.html',
  styleUrls: ['./loanapprove.component.css']
})
export class LoanapproveComponent implements OnInit {

  displayedColumns: string[] =['loanId','loanName','loanEmail','loanAccountNo','loanPhoneNo','loanAadharNo','loanPanNo','loanType','loanAmount','loanAnnualIncome','address','status'];
  dataSource!:any;
  loandetails:Loan[]=[];
  status!:boolean;
  constructor(private loanService:LoanapproveService) { }

  ngOnInit(): void {
    this.loanService.getLoanList().subscribe(
      data=>{
        this.dataSource = data;
        console.log(data , "loan component");
        
      },
      error=>{
        console.log(error);
        
      }
    )
  }

  approve(loanData:any){
     this.status = true;
     loanData.status = this.status;
    this.loanService.updateLoan(loanData)
     console.log(loanData);
    
  }
  reject(loanData:any){
     this.status = false;
     loanData.status = this.status;
    this.loanService.updateLoan(loanData)
    console.log(loanData);
  }


}
