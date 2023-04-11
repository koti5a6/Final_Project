package onlinebankingsystem.controller;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import onlinebankingsystem.model.Admin;
import onlinebankingsystem.repository.AdminRepo;


@RestController
@RequestMapping("/admin/login")
@CrossOrigin(origins="http://localhost:4200")
public class AdminController {
	static Logger log = Logger.getLogger(AdminController.class.getClass()) ;
	@Autowired
	private AdminRepo repo;
	
	@SuppressWarnings("unchecked")
	@PostMapping
	public ResponseEntity<Admin> loginAdmin(@RequestBody Admin adminData){
		log.info(adminData);
		Admin admin=repo.findByAdminId(adminData.getAdminId());
		if(admin.getPassword().equals(adminData.getPassword()))
			return ResponseEntity.ok(admin);
		return (ResponseEntity<Admin>) ResponseEntity.internalServerError();
		
	}

}
