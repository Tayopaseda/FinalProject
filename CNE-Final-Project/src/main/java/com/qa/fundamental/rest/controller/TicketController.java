package com.qa.fundamental.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.fundamental.persistence.domain.Ticket;
import com.qa.fundamental.service.TicketService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/ticket")
public class TicketController {
	/*
	 * passes things to the service
	 */
	private TicketService service;
	
	
    /*
     *  Service dependency injection
     */
	@Autowired
	public TicketController(TicketService service) {
		super();
		this.service = service;
	}
	
	
	@PostMapping("/create")
	public ResponseEntity<Ticket> create(@RequestBody Ticket ticket){
		Ticket new_ticket = this.service.create(ticket);
		return new ResponseEntity<Ticket>(new_ticket, HttpStatus.CREATED);
	}
	
	@GetMapping("/readQueued")
	public ResponseEntity<List<Ticket>> readQueued(){
		return ResponseEntity.ok(this.service.readAllQueued()); 
	}
	
	@GetMapping("/readCompleted")
	public ResponseEntity<List<Ticket>> readCompleted(){
		return ResponseEntity.ok(this.service.readAllCompleted()); 
	}
	
	@GetMapping("/readCompleted/cohort")
	public ResponseEntity<List<Ticket>> readCompletedByCohort(@RequestBody String cohort){
		return ResponseEntity.ok(this.service.readByCompletedCohort(cohort)); 
	}
	
	@GetMapping("/readQueued/cohort")
	public ResponseEntity<List<Ticket>> readQueuedByCohort(@RequestBody String cohort){
		return ResponseEntity.ok(this.service.readByQueuedCohort(cohort)); 
	}
	
	@GetMapping("/readQueued/Topic")
	public ResponseEntity<List<Ticket>> readQueuedByTopic(@RequestBody String topic){
		return ResponseEntity.ok(this.service.readQueuedByTopic(topic)); 
	}
	
	@GetMapping("/readCompleted/Topic")
	public ResponseEntity<List<Ticket>> readCompletedByTopic(@RequestBody String topic){
		return ResponseEntity.ok(this.service.readCompletedByTopic(topic)); 
	}
	
	
}
