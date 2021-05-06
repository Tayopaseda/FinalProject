package com.qa.fundamental.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.fundamental.persistence.domain.Ticket;
import com.qa.fundamental.persistence.repository.TicketRepo;

@Service
public class TicketService {
	
	private TicketRepo repo;

	@Autowired
	public TicketService(TicketRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Ticket create(Ticket ticket) {
		return this.repo.save(ticket);
	}
	
	public List<Ticket> readAllQueued() {
		return this.repo.readAllQueued();
	}
	
	public List<Ticket> readAllCompleted() {
		return this.repo.readAllCompleted();
	}
	
	public List<Ticket> readByQueuedCohort(String cohort){
		return this.repo.readByQueuedCohort(cohort);
	}
	
	public List<Ticket> readByCompletedCohort(String cohort){
		return this.repo.readByCompletedCohort(cohort);
	}
	
	public List<Ticket> readCompletedByTopic(String topic){
		return this.repo.readCompletedByTopic(topic);
	}
	
	public List<Ticket> readQueuedByTopic(String topic){
		return this.repo.readQueuedByTopic(topic);
	}

	public List<Ticket> readByQueuedUrgency(String urgency){
		return this.repo.readByQueuedUrgency(urgency);
	}
	
	public List<Ticket> readByCompletedUrgency(String urgency){
		return this.repo.readByCompletedUrgency(urgency);
	}
	
	public boolean deleteTicket(Long id) {
		this.repo.deleteById(id);
		return !this.repo.existsById(id);
	}
	
	public Ticket toggleCompleted(Long id) {
		Ticket updated_ticket = this.repo.findById(id).get();
		updated_ticket.setCompleted(!updated_ticket.isCompleted());
		return this.repo.save(updated_ticket);
	}
	
	public Ticket getById(Long id) {
		Optional<Ticket> ticket = this.repo.findById(id);
		return ticket.get();
	}
	
	public Ticket updateById(Long id, Ticket ticket) {
		Ticket old = this.repo.findById(id).get();
		old.set_description(ticket.get_description());
		old.setCohort(ticket.getCohort());
		old.setTitle(ticket.getTitle());
		old.setTopic(ticket.getTopic());
		old.setTrainee(ticket.getTrainee());
		old.setTrainer(ticket.getTrainer());
		old.setDateTime(ticket.getDateTime());
		old.setSolution(ticket.getSolution());
		return this.repo.save(old);
	}
}
