package com.qa.fundamental.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.fundamental.persistence.domain.PhoneBook;
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
	
	
	
	
	
}
