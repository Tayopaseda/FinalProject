package com.qa.fundamental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.fundamental.persistence.repository.TicketRepo;

@Service
public class TicketService {
	
	private TicketRepo repo;

	@Autowired
	public TicketService(TicketRepo repo) {
		super();
		this.repo = repo;
	}
	
	
	
	

}
