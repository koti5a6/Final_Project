package onlinebankingsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import onlinebankingsystem.model.Loan;

public interface LoanRepository extends JpaRepository<Loan, Integer> {
	List<Loan> findAll();
	 
	 Loan findByLoanAccountNo(String loanAccountNo);
	Loan findByLoanId(int loanId);
	List<Loan> findByUserId(int uId);
}
