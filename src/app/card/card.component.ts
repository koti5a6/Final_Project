import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { Card } from '../model/card';
import { CardService } from '../service/card.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //card=new Card();
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

  constructor(private route:Router,private service:CardService,private _router : Router) { }

  ngOnInit(): void {
  }
  applycard()
  {
    this.card.user.id=Number(localStorage.getItem('uId'));
    this.service.saveCardToDatabase(this.card).subscribe(

      data=>{
              console.log("Credit Card applied successfully");
              alert("Credit Card applied Successfully")
              this._router.navigate(['/home'])
             
            },
      error=>console.log("error")
    )
  }

}