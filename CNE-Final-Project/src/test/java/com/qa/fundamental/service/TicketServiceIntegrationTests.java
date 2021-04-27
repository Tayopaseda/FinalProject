package com.qa.fundamental.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;

import com.qa.fundamental.persistence.domain.Ticket;
import com.qa.fundamental.persistence.repository.TicketRepo;

@SpringBootTest
@Sql(scripts = { "classpath:ticket-schema.sql",
        "classpath:ticket-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
@ActiveProfiles("test")
public class TicketServiceIntegrationTests {

	
	@Autowired
	private TicketService service;
	
	
	private Ticket ticket_1 = new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "React issue", false);
	private Ticket ticket_2 = new Ticket(2L, "trainee2", "cnejan", "frontend", "Reece", "react", "React issue", false);
	private Ticket ticket_3 = new Ticket(3L, "Aadil", "FebCNative", "terraform", "Vinesh", "jenkins", "sdbdjbdjbdbd", true);
	private Ticket ticket_4 = new Ticket(4L, "Haydon", "FebCNative", "GCP", "reece", "Security rules", "sdbdjbdjbdbd", false);
	
	
	@Test
	public void testCreate() {
		Assertions.assertThat(this.service.create(new Ticket("Haydon", "FebCNative", "GCP", "reece", "Security rules", "sdbdjbdjbdbd"))).isEqualTo(ticket_4);
		this.service.deleteTicket(4L);
	}
	
	@Test
	void testReadAllQueued() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_1);
		test_tickets.add(ticket_2);
		Assertions.assertThat(this.service.readAllQueued()).isEqualTo(test_tickets);
	}
	
	@Test
	void testReadAllCompleted() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_3);
		Assertions.assertThat(this.service.readAllCompleted()).isEqualTo(test_tickets);
	}
	
	@Test
	void testReadByQueuedCohort() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_2);
		Assertions.assertThat(this.service.readByQueuedCohort("cnejan")).isEqualTo(test_tickets);
	}
	
	
	@Test
	void testReadByCompletedCohort() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_3);
		Assertions.assertThat(this.service.readByCompletedCohort("FebCNative")).isEqualTo(test_tickets);
	}
	
	@Test
	void testReadByQueuedTopic() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_1);
		Assertions.assertThat(this.service.readQueuedByTopic("terraform")).isEqualTo(test_tickets);
	}
	
	@Test
	void testReadByCompletedTopic() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_3);
		Assertions.assertThat(this.service.readCompletedByTopic("terraform")).isEqualTo(test_tickets);
	}
	
	
	@Test
    void testDeleteById() {
	   Assertions.assertThat(this.service.deleteTicket(1L)).isEqualTo(true);
   }
	
	@Test
	void testToggleCompleted() {
		Assertions.assertThat(this.service.toggleCompleted(1L)).isEqualTo(new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "React issue", true));
	}
	
	@Test
	void testGetById() {
		Assertions.assertThat(this.service.getById(1L)).isEqualTo(ticket_1);
	}
	
	
	
}
