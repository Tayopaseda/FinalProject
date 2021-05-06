package com.qa.fundamental.persistence.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
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
	private String urgency;
	
	@Column
	private String title;
	
	@Column
	private String dateTime;
	
	@Column
	@NotNull
	private String _description;
	
	@Column
	private String solution;
	
	@Column
	private boolean completed;


	public Ticket(String trainee, String cohort, String topic, String trainer, String urgency, String title, String dateTime,
			String _description,String solution) {
		super();
		this.trainee = trainee;
		this.cohort = cohort;
		this.topic = topic;
		this.trainer = trainer;
		this.urgency = urgency;
		this.title = title;
		this.dateTime = dateTime;
		this._description = _description;
		this.solution = "";
		this.completed = false;
	}


	public Ticket(String trainee, String cohort, String topic, String trainer, String urgency, String title, String dateTime,
			String _description,String solution,boolean completed) {
		super();
		this.trainee = trainee;
		this.cohort = cohort;
		this.topic = topic;
		this.trainer = trainer;
		this.urgency = urgency;
		this.title = title;
		this.dateTime = dateTime;
		this._description = _description;
		this.solution = solution;
		this.completed = completed;
	}
	
		

}
