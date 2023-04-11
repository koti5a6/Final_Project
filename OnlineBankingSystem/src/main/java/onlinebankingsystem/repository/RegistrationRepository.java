package onlinebankingsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import onlinebankingsystem.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer> {
	public User findByEmailId(String emailId);
	public User findByEmailIdAndPassword(String emailId, String password);
	
	User findById(int id);
	
	User findByAccountNo(int accountNo);
}
