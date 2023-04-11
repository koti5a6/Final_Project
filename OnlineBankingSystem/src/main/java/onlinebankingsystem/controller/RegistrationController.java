package onlinebankingsystem.controller;

import java.io.IOException;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import onlinebankingsystem.model.User;

import onlinebankingsystem.service.RegistrationService;



@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4200")
	
	public User registerUser(@RequestBody User user) throws IOException{
		String tempEmailId = user.getEmailId();
		
		if(tempEmailId != null && !"".equals(tempEmailId)) {
			User userobj = service.fetchUserByEmailId(tempEmailId);
			if(userobj != null) {
				throw new IOException("user with"+tempEmailId+"is already exists");
			}
		}
		
		User userObj= null;
		userObj =service.saveUser(user);
		return userObj;
		
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public User loginUser(@RequestBody User user) throws IOException{
		String tempEmailId = user.getEmailId();
		String tempPass = user.getPassword();
		User userObj = null;
		if(tempEmailId != null && tempPass !=null) {
			userObj=service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(userObj == null) {
			throw new IOException("Bad Credentials");
		}
		return userObj;
	}
	@GetMapping("/get-list")
	@CrossOrigin(origins = "http://localhost:4200")
    public List<User> getList(){
        return this.service.getList();
    }
	
}