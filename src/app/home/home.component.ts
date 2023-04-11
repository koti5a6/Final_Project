import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public RegisterService:RegistrationService) { }

  ngOnInit(): void {
  }

}
