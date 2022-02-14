package com.example.api.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Table()
@Entity
public class Project {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private Date anticipated_harvest_date;
	private Date sowing_date;
	private Date contact_date;
	private Date harvest_date;
	private int step_in_process;
	private boolean isupdate;
	private String localisation;
	private String country;
	private String name;
	private String status;
	private long area;
	@ManyToOne
	@JoinColumn(name="farmer_id_id")
	private Farmer farmerid;
	
	@ManyToOne
	@JoinColumn(name="plant_id_id")
	private Plant plantid;
	
	
	
	public Farmer getFarmer_id() {
		return farmerid;
	}
	public void setFarmer_id(Farmer farmer_id) {
		this.farmerid = farmer_id;
	}
	public Plant getPlant_id() {
		return plantid;
	}
	public void setPlant_id(Plant plant_id) {
		this.plantid = plant_id;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Date getAnticipated_harvest_date() {
		return anticipated_harvest_date;
	}
	public void setAnticipated_harvest_date(Date anticipated_harvest_date) {
		this.anticipated_harvest_date = anticipated_harvest_date;
	}
	public Date getSowing_date() {
		return sowing_date;
	}
	public void setSowing_date(Date sowing_date) {
		this.sowing_date = sowing_date;
	}
	public Date getContact_date() {
		return contact_date;
	}
	public void setContact_date(Date contact_date) {
		this.contact_date = contact_date;
	}
	public Date getHarvest_date() {
		return harvest_date;
	}
	public void setHarvest_date(Date harvest_date) {
		this.harvest_date = harvest_date;
	}
	public int getStep_in_process() {
		return step_in_process;
	}
	public void setStep_in_process(int step_in_process) {
		this.step_in_process = step_in_process;
	}
	public boolean isIsupdate() {
		return isupdate;
	}
	public void setIsupdate(boolean isupdate) {
		this.isupdate = isupdate;
	}
	public String getLocalisation() {
		return localisation;
	}
	public void setLocalisation(String localisation) {
		this.localisation = localisation;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public long getArea() {
		return area;
	}
	public void setArea(long area) {
		this.area = area;
	}
}
	
	
