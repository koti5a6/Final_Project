import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './component/customer/customer.component';
import { CreditapproveComponent } from './creditapprove/creditapprove.component';
import { LoanapproveComponent } from './loanapprove/loanapprove.component';
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
import { ManagerComponent } from './manager/manager.component';
import { LoanstatusComponent } from './loanstatus/loanstatus.component';
import { ProfileComponent } from './profile/profile.component';
import { CardstatusComponent } from './cardstatus/cardstatus.component';
import { TransactionComponent } from './transaction/transaction.component';
const routes: Routes = [
  {
    path:'',
    redirectTo: 'project',
    pathMatch:'full'
},
{path:'', component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'customer',component:CustomerComponent},
{path:'loan',component:LoanComponent},
{path:'card',component:CardComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'userdash',component:UserdashboardComponent},
{path:'beneficiary',component:BeneficiaryComponent},
{path:'project',component:ProjectComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'admindash',component:AdmindashComponent},
//{path:'transaction',component:ManagerComponent},
{path:'loanapprove',component:LoanapproveComponent},
{path:'loanstatus',component:LoanstatusComponent},
{path:'cardapprove',component:CreditapproveComponent},
{path:'profile',component:ProfileComponent},
{path:'cardstatus',component:CardstatusComponent},
{path:'transaction',component:TransactionComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
