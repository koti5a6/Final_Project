import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { MatFormField, MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatLabel } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { ProjectComponent } from './project/project.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanapproveComponent } from './loanapprove/loanapprove.component';
import { CreditapproveComponent } from './creditapprove/creditapprove.component';
import { LoanstatusComponent } from './loanstatus/loanstatus.component';
import { ProfileComponent } from './profile/profile.component';
import { CardstatusComponent } from './cardstatus/cardstatus.component';
import { TransactionComponent } from './transaction/transaction.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ManagerComponent,
    HomeComponent,
    LoanComponent,
    CardComponent,
    LoginComponent,
    RegisterComponent,
    UserdashboardComponent,
    BeneficiaryComponent,
    ProjectComponent,
    AdminloginComponent,
    AdmindashComponent,
    LoanapproveComponent,
    CreditapproveComponent,
    LoanstatusComponent,
    ProfileComponent,
    CardstatusComponent,
    TransactionComponent
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
