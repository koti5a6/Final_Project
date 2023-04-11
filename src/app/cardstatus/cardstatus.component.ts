import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';
import { Card } from '../model/card';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cardstatus',
  templateUrl: './cardstatus.component.html',
  styleUrls: ['./cardstatus.component.css']
})
export class CardstatusComponent implements OnInit {
  card={
    creditId :0,
    name : '',
    email : '',
    accountNo :'' ,
    phoneNo : '',
    panNo:'',
    creditType : '',
    amount : '',
    annualIncome :'',
    status :'',
    user!: {
		id:0
    }

  };
  uId!:number;
  displayedColumns: string[] =['id','userName','emailId','phone no','loantype','status'];
  dataSource!:any;

  constructor(public cardservice: CardService,private _router:Router ,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.uId= this._route.snapshot.params['id'];
    
    this.cardservice.getCardByUserId(this.card.user.id=Number(localStorage.getItem('uId'))).subscribe(
      data=>{
       
        this.dataSource = data;
         console.log("card details "+data)
        
      },
      err=>{
        console.log("err")
      }
    )

   }
  }


