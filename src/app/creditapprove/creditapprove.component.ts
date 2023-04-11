import { Component, OnInit } from '@angular/core';
import { CreditapproveService } from '../service/creditapprove.service';

@Component({
  selector: 'app-creditapprove',
  templateUrl: './creditapprove.component.html',
  styleUrls: ['./creditapprove.component.css']
})
export class CreditapproveComponent implements OnInit {

  displayedColumns: string[] =['creditId','name','email','accountNo','phoneNo','panNo','creditType','amount','annualIncome','status'];
  dataSource!:any;

  status!:boolean;
  constructor(private cardService:CreditapproveService) { }

  ngOnInit(): void {
    this.cardService.getCardList().subscribe(
      data=>{
        this.dataSource = data;
        console.log(data , "card component");
        
      },
      error=>{
        console.log(error);
        
      }
    )
  }

  approve(cardData:any){
    this.status = true;
    cardData.status = this.status;
    this.cardService.updateCard(cardData)
    console.log(cardData);
    
  }
  reject(cardData:any){
    this.status = false;
    cardData.status = this.status;
    this.cardService.updateCard(cardData)
    console.log(cardData);
  }

}
