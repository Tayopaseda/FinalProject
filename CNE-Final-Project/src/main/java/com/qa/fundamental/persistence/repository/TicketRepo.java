package com.qa.fundamental.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.qa.fundamental.persistence.domain.Ticket;

public interface TicketRepo extends JpaRepository<Ticket, Long>{
	
	@Query("SELECT c FROM Ticket c WHERE c.completed != true")
	List<Ticket> readAllQueued();
	
	@Query("SELECT c FROM Ticket c WHERE c.completed = true")
	List<Ticket> readAllCompleted();
	
	@Query("SELECT c FROM Ticket c WHERE c.cohort = ?1 AND c.completed != true")
	List<Ticket> readByQueuedCohort(String cohort);
	
	@Query("SELECT c FROM Ticket c WHERE c.cohort = ?1 AND c.completed = true")
	List<Ticket> readByCompletedCohort(String cohort);
	
	@Query("SELECT c FROM Ticket c WHERE c.topic like %?1% AND c.completed != true")
	List<Ticket> readQueuedByTopic(String name);
	
	@Query("SELECT c FROM Ticket c WHERE c.topic like %?1% AND c.completed = true")
	List<Ticket> readCompletedByTopic(String name);

	
	
}
