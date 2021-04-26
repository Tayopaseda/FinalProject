package com.qa.fundamental.persistence.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Ticket {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	@NotNull
	private String trainee;
	
	@Column
	private String Cohort;
	
	@Column
	private String Topics;
	
	@Column
	private String trainer;
	
	@Column
	private String subject;
	
	@Column
	@NotNull
	private String description;
	
	@Column
	private boolean completed;

	public Ticket(@NotNull String trainee, String cohort, String topics, String trainer, String subject,
			@NotNull String description) {
		super();
		this.trainee = trainee;
		Cohort = cohort;
		Topics = topics;
		this.trainer = trainer;
		this.subject = subject;
		this.description = description;
	}
	
	

}
