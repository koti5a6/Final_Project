import { User } from "./user";
export class Loan {

     loanId : number | undefined;
	 loanName : string='';
	 loanEmail : string='';
	 loanAccountNo :string='' ;
	
	 loanPhoneNo : string='' ;
	 loanAadharNo :  string='';
	 loanPanNo: string='';
	 loanType : string='';
	 loanAmount : string='';
	 loanAnnualIncome :string='';
	 address : string='';
	 status :string='';
	 
	user!: {
		id:number|undefined;
	};
}
     
