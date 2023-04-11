package onlinebankingsystem.model;



import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table
public class User {
	
	@Id
	@GeneratedValue     //(strategy=GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String accountNo;
	public User( int id, String userName, String emailId, String password,String accountNo) {
		super();
		this.id = id;
		this.userName = userName;
		this.emailId = emailId;
		this.password = password;
		this.accountNo=accountNo;
	}
	@Column(name = "userName")
	private String userName;
	@Column(name = "emailId")
  private String emailId;
	@Column(name = "password")
  private String password;
	
	
	@OneToMany(cascade= CascadeType.ALL,fetch=FetchType.LAZY,mappedBy="user")
	@JsonIgnore
	List<Loan> loans=new ArrayList<>();
	
	@OneToMany(cascade= CascadeType.ALL,fetch=FetchType.LAZY,mappedBy="user")
	@JsonIgnore
	List<Card> cards=new ArrayList<>();
	@OneToMany(cascade= CascadeType.ALL,fetch=FetchType.LAZY,mappedBy="user")
	@JsonIgnore
	List<Beneficiary> bens=new ArrayList<>();
	
  public User() {
	}
  
  public int getId() {
  	return id;
  }

  public void setId(int id) {
  	this.id = id;
  }

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAccountNo() {
		return accountNo;
	}

	public void setAccountno(String accountNo) {
		this.accountNo = accountNo;
	}

	public List<Loan> getLoans() {
		return loans;
	}

	public void setLoans(List<Loan> loans) {
		this.loans = loans;
	}

	public List<Card> getCards() {
		return cards;
	}

	public void setCards(List<Card> cards) {
		this.cards = cards;
	}

	public List<Beneficiary> getBens() {
		return bens;
	}

	public void setBens(List<Beneficiary> bens) {
		this.bens = bens;
	}
	
	
	
	
}
