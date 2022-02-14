package com.example.api.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Table()
@Entity
public class Plant {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private int periodicite;
	private String name;
	private String seed_type;
	@OneToMany(cascade = CascadeType.REMOVE, mappedBy = "plantid")
	@JsonIgnore
	List<Project> projects;
	
	
	
	public List<Project> getProjects() {
		return projects;
	}
	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getPeriodicite() {
		return periodicite;
	}
	public void setPeriodicite(int periodicite) {
		this.periodicite = periodicite;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSeed_type() {
		return seed_type;
	}
	public void setSeed_type(String seed_type) {
		this.seed_type = seed_type;
	}
	
	
}
