package com.qa.fundamental.service;

import java.util.ArrayList;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.qa.fundamental.persistence.domain.Ticket;
import com.qa.fundamental.persistence.repository.TicketRepo;

@SpringBootTest
@ActiveProfiles("test")
public class TicketServiceIntegrationTests {

	
	@Autowired
	private TicketService service;
	
	
	private Ticket ticket_1 = new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "sdbdjbdjbdbd", false);
	private Ticket ticket_2 = new Ticket(2L, "Tayo", "Software", "ansible", "aswene", "ansible galaxy", "sdbdjbdjbdbd", false);
	private Ticket ticket_3 = new Ticket(3L, "Aadil", "FebCNative", "terraform", "Vinesh", "jenkins", "sdbdjbdjbdbd", true);
	private Ticket ticket_4 = new Ticket(4L, "Haydon", "FebCNative", "GCP", "reece", "Security rules", "sdbdjbdjbdbd", true);
	
	@BeforeClass
	public void init() {
		this.service.create(new Ticket("Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "sdbdjbdjbdbd"));
		this.service.create(new Ticket("Tayo", "Software", "ansible", "aswene", "ansible galaxy", "sdbdjbdjbdbd"));
		this.service.create(new Ticket("Aadil", "FebCNative", "terraform", "Vinesh", "jenkins", "sdbdjbdjbdbd"));
	}
	
	@AfterClass
	public void reset() {
		this.service.deleteTicket(1L);
		this.service.deleteTicket(2L);
		this.service.deleteTicket(3L);
		
	}
	
	@Test
	public void testCreate() {
		Assertions.assertThat(this.service.create(new Ticket("Haydon", "FebCNative", "GCP", "reece", "Security rules", "sdbdjbdjbdbd"))).isEqualTo(ticket_4);
	}
	
	@Test
	void testReadAllQueued() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_1);
		test_tickets.add(ticket_2);
		Assertions.assertThat(this.service.readAllQueued()).isEqualTo(test_tickets);
	}
	
	
}
