package onlinebankingsystem.service;

import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import onlinebankingsystem.model.Card;
import onlinebankingsystem.repository.CardRepository;

@Service
public class CardService {
	static Logger log = Logger.getLogger(CardService.class.getName()) ;

	@Autowired
	private CardRepository creditcardrepository;
	

	public Card applyCreditCard(Card credit) {
		
		log.info(credit.toString());
		return creditcardrepository.save(credit);
	}

	 public List<Card> getCardList() {
	       return this.creditcardrepository.findAll();
	    }

	  
	    public Card updateCard(Card cardData) {
	        
	        log.info(cardData);
	        Card card = this.getCardById(cardData.getCreditId());
	        
	        log.info(cardData.getCreditId());

	        
	        card.setStatus(cardData.getStatus());
	        card.setAccountNo(cardData.getAccountNo());
	        card.setAmount(cardData.getAmount());
	        card.setAnnualIncome(cardData.getAnnualIncome());
	        card.setEmail(cardData.getEmail());
	        card.setName(cardData.getName());
	        card.setPanNo(cardData.getPanNo());
	        card.setPhoneNo(cardData.getPhoneNo());
	        return this.creditcardrepository.save(card);
	    }

	    
	    public Card getCardById(int creditid) {
	       return this.creditcardrepository.findByCreditId(creditid);
	    }

	    public List<Card> getCardsByUser(int uId){
	    	return this.creditcardrepository.findByUserId(uId);
	    }
}