package onlinebankingsystem.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="CARDFORM")

public class Card {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int creditId;
	private String name;
	private String email;
	private String accountNo;
	private String phoneNo;
	
	private String panNo;
	private String creditType;
	private double amount;
	public Card(double amount, double annualIncome, String status, User user) {
		super();
		this.amount = amount;
		this.annualIncome = annualIncome;
		this.status = status;
		this.user = user;
	}
	private double annualIncome;
	private String status;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private User user;
	public Card(User user) {
		super();
		this.user = user;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public int getCreditId() {
		return creditId;
	}
	public void setCreditId(int creditId) {
		this.creditId = creditId;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	
	public String getPanNo() {
		return panNo;
	}
	public void setPanNo(String panNo) {
		this.panNo = panNo;
	}
	public String getCreditType() {
		return creditType;
	}
	public void setCreditType(String creditType) {
		this.creditType = creditType;
	}
	
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public double getAnnualIncome() {
		return annualIncome;
	}
	public void setAnnualIncome(double annualIncome) {
		this.annualIncome = annualIncome;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Card(int creditId, String name, String email, String accountNo, String phoneNo, 
			String panNo, String creditType) {
		super();
		this.creditId = creditId;
		this.name = name;
		this.email = email;
		this.accountNo = accountNo;
		this.phoneNo = phoneNo;
		
		this.panNo = panNo;
		this.creditType = creditType;
		
	}
	public Card() {
		super();

	}
}