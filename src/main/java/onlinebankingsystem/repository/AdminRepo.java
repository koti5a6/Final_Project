package onlinebankingsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import onlinebankingsystem.model.Admin;

@Repository
public interface AdminRepo  extends JpaRepository<Admin, Integer>{
	
	Admin findByAdminId (Integer adminid);

}
