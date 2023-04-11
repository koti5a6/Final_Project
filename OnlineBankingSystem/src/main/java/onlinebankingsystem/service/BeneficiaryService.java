package onlinebankingsystem.service;

import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import onlinebankingsystem.model.Beneficiary;
import onlinebankingsystem.repository.BeneficiaryRepository;

@Service

public class BeneficiaryService {
	static Logger log = Logger.getLogger(BeneficiaryService.class.getName()) ;
	@Autowired
	private BeneficiaryRepository benRepository;
	

	public Beneficiary applyLoan(Beneficiary ben) {
		log.info(ben.toString());
		
		return benRepository.save(ben);
	}

	public List<Beneficiary> getBensByUser(int uId){
    	return this.benRepository.findByUserId(uId);
    }

}
