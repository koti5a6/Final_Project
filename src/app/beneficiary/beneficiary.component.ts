import { Component, OnInit } from '@angular/core';

import { NgModel } from '@angular/forms';
import { Route,Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { Beneficiary } from '../model/beneficiary';
import { BeneficiaryService } from '../service/beneficiary.service';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {

 // ben=new Beneficiary();
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

  constructor(private route:Router,private service:BeneficiaryService,private formBuilder : FormBuilder,private _router : Router) { }

  ngOnInit(): void {
  }
  addBen()
  {
    this.ben.user.id=Number(localStorage.getItem('uId'));
    this.service.saveBeneficiaryToDatabase(this.ben).subscribe(

      data=>{
              console.log("Amount Transferred successfully");
              alert("Amount Transferred successfully")
              this._router.navigate(['/home'])
             
            },
      error=>console.log("error")
    )
  }
}
