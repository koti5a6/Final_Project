package onlinebankingsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import onlinebankingsystem.model.Card;

public interface CardRepository extends JpaRepository<Card, Integer>{
	List<Card> findAll();
	Card findByCreditId(int creditid);
	List<Card> findByUserId(int uId);
}
