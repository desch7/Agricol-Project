package com.example.api.dto;

import lombok.Data;

@Data
public class PlantDto {
	
	private long value;
	private String label;
	public long getValue() {
		return value;
	}
	public void setValue(long value) {
		this.value = value;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	
	

}
