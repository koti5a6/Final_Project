package onlinebankingsystem.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import onlinebankingsystem.model.Beneficiary;

public interface BeneficiaryRepository extends JpaRepository<Beneficiary, Integer> {
	List<Beneficiary> findByUserId(int uId);
}
