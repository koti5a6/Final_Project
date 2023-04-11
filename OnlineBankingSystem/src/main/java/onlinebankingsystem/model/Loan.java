package onlinebankingsystem.model;



import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="LOANFORM")

public class Loan {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int loanId;
	private String loanName;
	private String loanEmail;
	private String loanAccountNo;
	
	private String loanPhoneNo;
	private String loanAadharNo;
	private String loanPanNo;
	private String loanType;
	public Loan(String loanType, double loanAmount, double loanAnnualIncome, String address, String status, User user) {
		super();
		this.loanType = loanType;
		this.loanAmount = loanAmount;
		this.loanAnnualIncome = loanAnnualIncome;
		this.address = address;
		this.status = status;
		this.user = user;
	}
	private double loanAmount;
	private double loanAnnualIncome;
	private String address;
	private String status;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private User user;
	
	public Loan(User user) {
		super();
		this.user = user;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Loan [loanId=" + loanId + ", loanName=" + loanName + ", loanEmail=" + loanEmail + ", loanAccountNo="
				+ loanAccountNo + ", loanPhoneNo=" + loanPhoneNo + ", loanAadharNo=" + loanAadharNo + ", loanPanNo="
				+ loanPanNo + ", loanType=" + loanType + ", loanAmount=" + loanAmount + ", loanAnnualIncome="
				+ loanAnnualIncome + ", address=" + address + ", status=" + status + "]";
	}
	public int getLoanId() {
		return loanId;
	}
	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}
	public String getLoanName() {
		return loanName;
	}
	public void setLoanName(String loanName) {
		this.loanName = loanName;
	}
	public String getLoanEmail() {
		return loanEmail;
	}
	public void setLoanEmail(String loanEmail) {
		this.loanEmail = loanEmail;
	}
	public String getLoanAccountNo() {
		return loanAccountNo;
	}
	public void setLoanAccountNo(String loanAccountNo) {
		this.loanAccountNo = loanAccountNo;
	}
	public String getLoanPhoneNo() {
		return loanPhoneNo;
	}
	public void setLoanPhoneNo(String loanPhoneNo) {
		this.loanPhoneNo = loanPhoneNo;
	}
	public String getLoanAadharNo() {
		return loanAadharNo;
	}
	public void setLoanAadharNo(String loanAadharNo) {
		this.loanAadharNo = loanAadharNo;
	}
	public String getLoanPanNo() {
		return loanPanNo;
	}
	public void setLoanPanNo(String loanPanNo) {
		this.loanPanNo = loanPanNo;
	}
	public String getLoanType() {
		return loanType;
	}
	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}
	public double getLoanAmount() {
		return loanAmount;
	}
	public void setLoanAmount(double loanAmount) {
		this.loanAmount = loanAmount;
	}
	public double getLoanAnnualIncome() {
		return loanAnnualIncome;
	}
	public void setLoanAnnualIncome(double loanAnnualIncome) {
		this.loanAnnualIncome = loanAnnualIncome;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Loan(int loanId, String loanName, String loanEmail, String loanAccountNo, String loanPhoneNo,
			String loanAadharNo, String loanPanNo) {
		super();
		this.loanId = loanId;
		this.loanName = loanName;
		this.loanEmail = loanEmail;
		this.loanAccountNo = loanAccountNo;
		this.loanPhoneNo = loanPhoneNo;
		this.loanAadharNo = loanAadharNo;
		this.loanPanNo = loanPanNo;
		
	}
	public Loan() {
		super();
	}
	
	
	
	

}
