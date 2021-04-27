package com.qa.fundamental.service.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Ticket does not exist with that ID")
public class TicketNotFoundException extends RuntimeException{

}
