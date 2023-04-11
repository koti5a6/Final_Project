package onlinebankingsystem.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import onlinebankingsystem.model.Beneficiary;
import onlinebankingsystem.service.BeneficiaryService;

@RestController
@RequestMapping("/ben")
@CrossOrigin(origins="http://localhost:4200")

public class BeneficiaryController {
	
	@Autowired
	private  BeneficiaryService  benService;
	
	
	@PostMapping("/addben")
	public Beneficiary addBen(@RequestBody Beneficiary ben) {
		return benService.applyLoan(ben);
	}
	
	@GetMapping("/getBenByUser/{id}")
    public List<Beneficiary> getBenListOfUser(@PathVariable int id){

    	return this.benService.getBensByUser(id);
    }

}
