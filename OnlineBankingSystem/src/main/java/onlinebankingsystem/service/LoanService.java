package onlinebankingsystem.service;


import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import onlinebankingsystem.model.Loan;
import onlinebankingsystem.repository.LoanRepository;

@Service

public class LoanService {

	static Logger log = Logger.getLogger(LoanService.class.getName()) ;
	@Autowired
	private LoanRepository loanRepository;
	

	public Loan applyLoan(Loan loan) {
		
		log.info(loan.toString());
		return loanRepository.save(loan);
	}


	    public List<Loan> getLoanList() {
	       return this.loanRepository.findAll();
	    }

	  
	    public Loan updateLoan(Loan loanData) {
	       
	        log.info(loanData);
	        Loan loan = this.getLoanById(loanData.getLoanId());
	       
	        log.info(loanData.getLoanId());
	        loan.setAddress(loanData.getAddress());
	        loan.setLoanAadharNo(loanData.getLoanAadharNo());
	        loan.setStatus(loanData.getStatus());
	        loan.setLoanAccountNo(loanData.getLoanAccountNo());
	        loan.setLoanAmount(loanData.getLoanAmount());
	        loan.setLoanAnnualIncome(loanData.getLoanAnnualIncome());
	        loan.setLoanEmail(loanData.getLoanEmail());
	        loan.setLoanName(loanData.getLoanName());
	        loan.setLoanPanNo(loanData.getLoanPanNo());
	        loan.setLoanPhoneNo(loanData.getLoanPhoneNo());
	        return this.loanRepository.save(loan);
	    }

	    
	    public Loan getLoanById(int loanId) {
	       return this.loanRepository.findByLoanId(loanId);
	    }
	    public Loan getLoanByAccountNo(String loanAccountNo) {
	    	return this.loanRepository.findByLoanAccountNo(loanAccountNo);
	    }
	    
	    public List<Loan> getLoansByUser(int uId){
	    	return this.loanRepository.findByUserId(uId);
	    }
}
