package onlinebankingsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import onlinebankingsystem.model.User;
import onlinebankingsystem.repository.RegistrationRepository;

@Service
public class RegistrationService {
	@Autowired
	private RegistrationRepository repo;
	
	public  User saveUser (User user) {
		
		return repo.save(user);
	}
		
	public User fetchUserByEmailId(String email) {
		return repo.findByEmailId(email);
	}
	
	public User fetchUserByEmailIdAndPassword(String email, String password) {
		return repo.findByEmailIdAndPassword(email, password);
	}
   
	public List<User> getList() {
		
		return this.repo.findAll();
	}
	public User getAccountNoById(int accountNo) {
		return repo.findByAccountNo(accountNo);
	}
    public User getCustomerById(int id) {
		
		return repo.findById(id);
		
}

}
