package com.qa.fundamental.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.fundamental.persistence.domain.Ticket;


@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles(profiles = "test")
@Sql(scripts = { "classpath:ticket-schema.sql",
		"classpath:ticket-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
public class TicketControllerIntegrationTest {
	
	@Autowired
	private MockMvc mockMVC;

	@Autowired
	private ObjectMapper mapper;
	
	
	
	@Test
	void testCreateTicket() throws Exception {
		Ticket newTicket = new Ticket(4L,"Haydon", "FebCNative", "GCP", "reece", "Security rules", "sdbdjbdjbdbd", false);
		String requestBody = this.mapper.writeValueAsString(newTicket);

		RequestBuilder request = post("/ticket/create").contentType(MediaType.APPLICATION_JSON).content(requestBody);

		ResultMatcher checkStatus = status().isCreated();

		Ticket savedTicket = new Ticket(4L,"Haydon", "FebCNative", "GCP", "reece", "Security rules", "sdbdjbdjbdbd", false);
		savedTicket.setId(4L);

		String resultBody = this.mapper.writeValueAsString(savedTicket);
		ResultMatcher checkBody = content().json(resultBody);

		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	
	
  
	
	
//	@Test
//	void testDelete() throws Exception {
//		
////		Test delete connection
//		RequestBuilder ticketrequest = delete("/ticket/delete/1");
//		
////      Result target
//		ResultMatcher ticketStatus = status().isOk();
//		
////		Match results
//		this.mockMVC.perform(ticketrequest).andExpect(ticketStatus);
//	}
	
	
	
	@Test
	void testReadQueuedTicket() throws Exception {
		// MUST match the test database record
		Ticket ticket_1 = new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "React issue", false);
		Ticket ticket_2 = new Ticket(2L, "trainee2", "cnejan", "frontend", "Reece", "react", "React issue", false);

		

		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket_1);
		tickets.add(ticket_2);
		
		
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/ticket/readQueued")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}
	
	@Test
	void testReadCompletedTicket() throws Exception {
		// MUST match the test database record
		Ticket ticket_3 = new Ticket(3L, "Aadil", "FebCNative", "terraform", "Vinesh", "jenkins", "sdbdjbdjbdbd", true);
		

		
		

		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket_3);
		
		
		
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/ticket/readCompleted")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}
	
	@Test
	void testReadQueuedTopicTicket() throws Exception {
		// MUST match the test database record
		Ticket ticket_1 = new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init", "React issue", false);
		

		

		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket_1);
		
		
		
		
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/ticket/readQueued/Topic/terraform")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}
	
	@Test
	void testReadCompletedTopicTicket() throws Exception {
		// MUST match the test database record
		Ticket ticket_3 = new Ticket(3L, "Aadil", "FebCNative", "terraform", "Vinesh", "jenkins", "sdbdjbdjbdbd", true);
		

		

		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket_3);
		
		
		
		
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/ticket/readCompleted/Topic/terraform")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}

}
