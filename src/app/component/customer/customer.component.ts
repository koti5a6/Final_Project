import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { CustomerService } from 'src/app/service/customer.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  displayedColumns: string[] =['id','userName','emailId','accountno'];
  dataSource!:any;

  
  constructor(private cusService:CustomerService) { }

  ngOnInit(): void {
    this.cusService.getList().subscribe(
      data=>{
        this.dataSource = data;
        console.log(data , "customer component");
        
      },
      error=>{
        console.log(error);
        
      }
    )
  }



}


