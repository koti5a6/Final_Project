package onlinebankingsystem.controller;


import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import onlinebankingsystem.model.Loan;
import onlinebankingsystem.service.LoanService;

@RestController
@RequestMapping("/loan")
@CrossOrigin(origins="http://localhost:4200")


public class LoanController {
	static Logger log = Logger.getLogger(LoanService.class.getClass()) ;
	@Autowired
	private  LoanService  loanService;
	
	
	@PostMapping("/applyLoan")
	public Loan applyLoan(@RequestBody Loan loan) {
		return loanService.applyLoan(loan);
	}
	@GetMapping("/get-list")
    public List<Loan> getLoanList(){
        return this.loanService.getLoanList();
   }
	@GetMapping ("/getLoanByAccountNo/{loanAccountNo}")
	public Loan getLoanByAccountNo(@PathVariable String loanAccountNo ) {
		return this.loanService.getLoanByAccountNo(loanAccountNo);
	}
    @PutMapping("/update-loan")
    public Loan updateLoan(@RequestBody Loan loanData){
        Loan loan = this.loanService.getLoanById(loanData.getLoanId());
        
        log.info(loan.toString());
        log.info(loanData.toString());
        return this.loanService.updateLoan(loanData);
    }
    
    @GetMapping("/getLoanByUser/{id}")
    public List<Loan> getLoanListOfUser(@PathVariable int id){

    	return this.loanService.getLoansByUser(id);
    }

}
