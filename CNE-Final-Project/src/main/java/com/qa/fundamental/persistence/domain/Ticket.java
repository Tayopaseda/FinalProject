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
	private String cohort;
	
	@Column
	private String topic;
	
	@Column
	private String trainer;
	
	@Column
	private String title;
	
	@Column
	@NotNull
	private String description;
	
	@Column
	private boolean completed;

	public Ticket(@NotNull String trainee, String cohort, String topic, String trainer, String title,
			@NotNull String description, boolean completed) {
		super();
		this.trainee = trainee;
		this.cohort = cohort;
		this.topic = topic;
		this.trainer = trainer;
		this.title = title;
		this.description = description;
		this.completed = completed;
	}

	
	

}
