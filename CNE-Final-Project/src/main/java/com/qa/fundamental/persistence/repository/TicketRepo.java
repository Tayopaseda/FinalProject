package com.qa.fundamental.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.qa.fundamental.persistence.domain.Ticket;

public interface TicketRepo extends JpaRepository<Ticket, Long>{

}
