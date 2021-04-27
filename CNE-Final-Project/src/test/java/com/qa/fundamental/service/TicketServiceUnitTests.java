package com.qa.fundamental.service;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.qa.fundamental.persistence.domain.Ticket;
import com.qa.fundamental.persistence.repository.TicketRepo;

@SpringBootTest
@ActiveProfiles("test")
public class TicketServiceUnitTests {
	
	@Autowired
	private TicketService service;
	
	@MockBean
	private TicketRepo repo;
	

	
	private Ticket ticket_1 = new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init","time","React issue", false);
	private Ticket ticket_1_updated = new Ticket(1L, "Shamsi", "FebCNative", "terraform", "terry", "Terraform init", "time","sdbdjbdjbdbd", false);
	private Ticket ticket_2 = new Ticket(2L, "trainee2", "cnejan", "frontend", "Reece", "react","time" ,"React issue", false);
	private Ticket ticket_3 = new Ticket(3L, "Aadil", "FebCNative", "terraform", "Vinesh", "jenkins", "time","sdbdjbdjbdbd", true);
	private Ticket ticket_4 = new Ticket(4L, "Haydon", "FebCNative", "GCP", "reece", "Security rules", "time","sdbdjbdjbdbd", false);
	
	@Test
	void testCreate() {
		Mockito.when(this.repo.save(new Ticket("Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "time","sdbdjbdjbdbd"))).thenReturn(ticket_1);
		Assertions.assertThat(this.service.create(new Ticket("Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "time","sdbdjbdjbdbd"))).isEqualTo(ticket_1);
		Mockito.verify(this.repo, Mockito.times(1)).save(new Ticket("Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "time","sdbdjbdjbdbd"));
	}
	
	@Test
	void testReadAllQueued() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_1);
		test_tickets.add(ticket_2);
		test_tickets.add(ticket_4);
		Mockito.when(this.repo.readAllQueued()).thenReturn(test_tickets);
		Assertions.assertThat(this.service.readAllQueued()).isEqualTo(test_tickets);
		Mockito.verify(this.repo, Mockito.times(1)).readAllQueued();
	}
	
	@Test
	void testReadAllCompleted() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_3);
		Mockito.when(this.repo.readAllCompleted()).thenReturn(test_tickets);
		Assertions.assertThat(this.service.readAllCompleted()).isEqualTo(test_tickets);
		Mockito.verify(this.repo, Mockito.times(1)).readAllCompleted();
	}
	
	@Test
	void testReadByQueuedCohort() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_1);
		test_tickets.add(ticket_4);
		Mockito.when(this.repo.readByQueuedCohort("FebCNative")).thenReturn(test_tickets);
		Assertions.assertThat(this.service.readByQueuedCohort("FebCNative")).isEqualTo(test_tickets);
		Mockito.verify(this.repo, Mockito.times(1)).readByQueuedCohort("FebCNative");
	}
	
	@Test
	void testReadByCompletedCohort() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_3);
		Mockito.when(this.repo.readByCompletedCohort("FebCNative")).thenReturn(test_tickets);
		Assertions.assertThat(this.service.readByCompletedCohort("FebCNative")).isEqualTo(test_tickets);
		Mockito.verify(this.repo, Mockito.times(1)).readByCompletedCohort("FebCNative");
	}
	
	@Test
	void testReadByQueuedTopic() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_1);
		test_tickets.add(ticket_4);
		Mockito.when(this.repo.readQueuedByTopic("terraform")).thenReturn(test_tickets);
		Assertions.assertThat(this.service.readQueuedByTopic("terraform")).isEqualTo(test_tickets);
		Mockito.verify(this.repo, Mockito.times(1)).readQueuedByTopic("terraform");
	}
	
	@Test
	void testReadByCompletedTopic() {
		List<Ticket> test_tickets = new ArrayList<Ticket>();
		test_tickets.add(ticket_1);
		test_tickets.add(ticket_4);
		Mockito.when(this.repo.readCompletedByTopic("terraform")).thenReturn(test_tickets);
		Assertions.assertThat(this.service.readCompletedByTopic("terraform")).isEqualTo(test_tickets);
		Mockito.verify(this.repo, Mockito.times(1)).readCompletedByTopic("terraform");
	}
	
	@Test
    void testDeleteById() {
       Mockito.when(this.repo.existsById(1L)).thenReturn(false);
	   Assertions.assertThat(this.service.deleteTicket(1L)).isEqualTo(true);
	   Mockito.verify(this.repo, Mockito.times(1)).existsById(1L);
	   Mockito.verify(this.repo, Mockito.times(1)).deleteById(1L);
   }
	
	@Test
	void testToggleCompleted() {
		Optional<Ticket> op = Optional.ofNullable(ticket_1);
		Mockito.when(this.repo.findById(1L)).thenReturn(op);
		Mockito.when(this.repo.save(new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "time","sdbdjbdjbdbd", true))).thenReturn(new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "time","sdbdjbdjbdbd", true));
		Assertions.assertThat(this.service.toggleCompleted(1L)).isEqualTo(new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "time","sdbdjbdjbdbd", true));
		Mockito.verify(this.repo, Mockito.times(1)).findById(1L);
		Mockito.verify(this.repo, Mockito.times(1)).save(new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "time","sdbdjbdjbdbd", true));
	}
	
	
	@Test
	void testGetById() {
		Optional<Ticket> op = Optional.ofNullable(ticket_1);
		Mockito.when(this.repo.findById(1L)).thenReturn(op);
		Assertions.assertThat(this.service.getById(1L)).isEqualTo(ticket_1);
		Mockito.verify(this.repo, Mockito.times(1)).findById(1L);
	}
	
	@Test
	void testUpdateById() {
		Optional<Ticket> op = Optional.ofNullable(ticket_1);
		Mockito.when(this.repo.findById(1L)).thenReturn(op);
		Mockito.when(this.repo.save(ticket_1_updated)).thenReturn(ticket_1_updated);
		Assertions.assertThat(this.service.updateById(1L, ticket_1_updated)).isEqualTo(ticket_1_updated);
		Mockito.verify(this.repo, Mockito.times(1)).findById(1L);
		Mockito.verify(this.repo, Mockito.times(1)).save(ticket_1_updated);
	}
	
	
}
