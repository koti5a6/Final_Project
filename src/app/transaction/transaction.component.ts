import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../model/beneficiary';
import { BeneficiaryService } from '../service/beneficiary.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  ben={
    id  : 0,
    name  : '',
    phoneNo  : '',
    ifcs  : '',
    branchId  : '',
    accountNo : '',
    amount:'',
    user: {
     id:0
   }
  };
  uId!:number;
  displayedColumns: string[] =['id','name','ifcs','accountNo','phoneNo','branchId','amount'];
  dataSource!:any;

  constructor(public benservice:BeneficiaryService,private _router:Router ,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.uId= this._route.snapshot.params['id'];
    
    this.benservice.getBenByUserId(this.ben.user.id=Number(localStorage.getItem('uId'))).subscribe(
      data=>{
       
        this.dataSource = data;
         console.log("beneficiary details "+data)
        
      },
      err=>{
        console.log("err")
      }
    )
  }

}
