package com.example.api.dto;

import java.util.Date;

import lombok.Data;

@Data
public class ProjectDto {
	

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
	private long plant_id;
	private long farmer_id;
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
	public long getPlant_id() {
		return plant_id;
	}
	public void setPlant_id(long plant_id) {
		this.plant_id = plant_id;
	}
	public long getFarmer_id() {
		return farmer_id;
	}
	public void setFarmer_id(long farmer_id) {
		this.farmer_id = farmer_id;
	}
	
	

}
