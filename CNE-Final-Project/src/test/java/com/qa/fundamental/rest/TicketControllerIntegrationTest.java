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
@Sql(scripts = { "classpath:schema.sql",
		"classpath:data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
public class TicketControllerIntegrationTest {
	
	@Autowired
	private MockMvc mockMVC;

	@Autowired
	private ObjectMapper mapper;
	
	
	private Ticket ticket_1 = new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init","time","React issue", false);
	private Ticket ticket_1_updated = new Ticket(1L, "Shamsi", "FebCNative", "terraform", "terry", "Terraform init","time", "sdbdjbdjbdbd", false);
	private Ticket ticket_1_completed = new Ticket(1L, "Shamsi", "FebCNative", "terraform", "nathan", "Terraform init","time","React issue", true);
	private Ticket ticket_2 = new Ticket(2L, "trainee2", "cnejan", "frontend", "Reece", "react", "time","React issue", false);
	private Ticket ticket_3 = new Ticket(3L, "Aadil", "FebCNative", "terraform", "Vinesh", "jenkins","time", "sdbdjbdjbdbd", true);
	private Ticket ticket_4 = new Ticket(4L, "Haydon", "FebCNative", "GCP", "reece", "Security rules","time", "sdbdjbdjbdbd", false);
	
	
	
	@Test
	void testCreateTicket() throws Exception {

//		Creating JSON
		String requestBody = this.mapper.writeValueAsString(ticket_4);

//		Test create link
		RequestBuilder request = post("/ticket/create").contentType(MediaType.APPLICATION_JSON).content(requestBody);

//		obtained result
		ResultMatcher checkStatus = status().isCreated();


//		creating JSON for target
		String resultBody = this.mapper.writeValueAsString(ticket_4);
		
//		Result target
		ResultMatcher checkBody = content().json(resultBody);

//		Match results
		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	
	
	
	@Test
	void testReadQueuedTicket() throws Exception {
		

		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket_1);
		tickets.add(ticket_2);
		
		
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/ticket/readQueued")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}
	
	@Test
	void testReadCompletedTicket() throws Exception {
		

		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket_3);
		
		
		
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/ticket/readCompleted")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}
	
	@Test
	void testReadQueuedCohortTicket() throws Exception {
		
		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket_1);
		
		
		
		
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/ticket/readQueued/Cohort/FebCNative")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}
	
	@Test
	void testReadCompletedCohortTicket() throws Exception {

		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket_3);
		
		
		
		
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/ticket/readCompleted/Cohort/FebCNative")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}
	
	@Test
	void testReadQueuedTopicTicket() throws Exception {
		
		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket_1);
		
		
		
		
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/ticket/readQueued/Topic/terraform")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}
	
	@Test
	void testReadCompletedTopicTicket() throws Exception {

		List<Ticket> tickets = new ArrayList<>();
		tickets.add(ticket_3);
		
		
		
		
		String responseBody = this.mapper.writeValueAsString(tickets);
		System.out.println();
		this.mockMVC.perform(get("/ticket/readCompleted/Topic/terraform")).andExpect(status().isOk()).andExpect(content().json(responseBody));

	}
	
	
	@Test
	void testCompletedTicket() throws Exception {
		Long id = 1L;
		
		String requestBody = this.mapper.writeValueAsString(ticket_1);
		RequestBuilder request = put("/ticket/completed/" + id).contentType(MediaType.APPLICATION_JSON)
				.content(requestBody);

		ResultMatcher checkStatus = status().isCreated();


		ticket_1_completed.setId(id);

		String resultBody = this.mapper.writeValueAsString(ticket_1_completed);
		ResultMatcher checkBody = content().json(resultBody);

		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody);

	}
	
	
	@Test
	void testUpdateTicket() throws Exception {
		
		Long id = 1L;
		
		String requestBody = this.mapper.writeValueAsString(ticket_1_updated);
		RequestBuilder request = put("/ticket/update/" + id).contentType(MediaType.APPLICATION_JSON)
				.content(requestBody);

		ResultMatcher checkStatus = status().isCreated();

		String resultBody = this.mapper.writeValueAsString(ticket_1_updated);
		ResultMatcher checkBody = content().json(resultBody);

		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody);

	}
	
	@Test
	void testDeleteTicket() throws Exception {

//		Test delete connection
		RequestBuilder ticketrequest = delete("/ticket/delete/1");
	
//      Result target
		ResultMatcher ticketStatus = status().isNoContent();

//		Match results
		this.mockMVC.perform(ticketrequest).andExpect(ticketStatus);

	}
	

}
