import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  constructor(public RegisterService:RegistrationService) { }

  ngOnInit(): void {
  }

}
