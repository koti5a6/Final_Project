package onlinebankingsystem.controller;

import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import onlinebankingsystem.model.Card;
import onlinebankingsystem.service.CardService;

@RestController
@RequestMapping("/card")
@CrossOrigin(origins="http://localhost:4200")

public class CardController {
	static Logger log = Logger.getLogger(CardController.class.getName()) ;
	@Autowired
	private  CardService  creditcardservice;
	
	
	@PostMapping("/applyCard")
	public Card applyCreditCard(@RequestBody Card credit) {
		return creditcardservice.applyCreditCard(credit);
	}

	@GetMapping("/get-list")
    public List<Card> getCardList(){
        return this.creditcardservice.getCardList();
    }

    @PutMapping("/update-card")
    public Card updateCard(@RequestBody Card cardData){
        Card card = this.creditcardservice.getCardById(cardData.getCreditId());
        
        log.info(card);
        log.info(cardData);
       
        return this.creditcardservice.updateCard(cardData);
    }
    
    @GetMapping("/getCardByUser/{id}")
    public List<Card> getCardListOfUser(@PathVariable int id){

    	return this.creditcardservice.getCardsByUser(id);
    }
	
	
}
