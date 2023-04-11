package onlinebankingsystem.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table

public class Beneficiary {
	
	@Id
	
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private int id;
	private String name;
	private long  phoneNo;
	private String ifcs;
	private int branchId;
	private String  accountNo;
	private String amount;
	public Beneficiary(String amount) {
		super();
		this.amount = amount;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	@ManyToOne(fetch = FetchType.EAGER)
	private User user;
	public Beneficiary(User user) {
		super();
		this.user = user;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getIfcs() {
		return ifcs;
	}
	public void setIfcs(String ifcs) {
		this.ifcs = ifcs;
	}
	public int getBranchId() {
		return branchId;
	}
	public void setBranchId(int branchId) {
		this.branchId = branchId;
	}
	public String getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}
	
	public Beneficiary(int id, String name, long phoneNo, String ifcs, int branchId, String accountNo, User user) {
		super();
		this.id = id;
		this.name = name;
		this.phoneNo = phoneNo;
		this.ifcs = ifcs;
		this.branchId = branchId;
		this.accountNo = accountNo;
		this.user=user;
		
	}
	
	public Beneficiary() {
		super();

	}
	
}
