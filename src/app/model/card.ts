export class Card {
    creditId : number | undefined;
    name : string='';
    email : string='';
    accountNo :string='' ;
    phoneNo : string='';
    panNo:string='';
    creditType : string='';
    amount : string='';
    annualIncome :string='';
    status :string=''
    user!: {
		id:number|undefined;
	};
}
