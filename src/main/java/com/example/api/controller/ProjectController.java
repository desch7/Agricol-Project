package com.example.api.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.api.dto.ProjectDto;
import com.example.api.model.Farmer;
import com.example.api.model.Plant;
import com.example.api.model.Project;
import com.example.api.repository.FarmerRepository;
import com.example.api.repository.PlantRepository;
import com.example.api.repository.ProjectRepository;

@RequestMapping("/api/project")
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ProjectController {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	@Autowired
	private FarmerRepository farmerRepository;
	
	@Autowired
	private PlantRepository plantRepository;

	@PostMapping("/create")
	public Project createProject(@RequestBody ProjectDto projectDto) {
		Project proj=new Project();
		proj.setName(projectDto.getName());
		proj.setArea(projectDto.getArea());
		proj.setCountry(projectDto.getCountry());
		proj.setLocalisation(projectDto.getLocalisation());
		/*
		//formattage des dates au format "yyyy-MM-dd"
		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.FRANCE);
		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd", Locale.FRANCE);
		LocalDate dateA = LocalDate.parse(projectDto.getAnticipated_harvest_date(), inputFormatter);
		LocalDate dateC = LocalDate.parse(projectDto.getContact_date(), inputFormatter);
		LocalDate dateH = LocalDate.parse(projectDto.getHarvest_date(), inputFormatter);
		LocalDate dateS = LocalDate.parse(projectDto.getSowing_date(), inputFormatter);
		String formatteddateA = outputFormatter.format(dateA);
		String formatteddateC = outputFormatter.format(dateC);
		String formatteddateH = outputFormatter.format(dateH);
		String formatteddateS = outputFormatter.format(dateS);
		*/
		proj.setAnticipated_harvest_date(projectDto.getAnticipated_harvest_date());
		proj.setContact_date(projectDto.getContact_date());
		proj.setHarvest_date(projectDto.getHarvest_date());
		proj.setSowing_date(projectDto.getSowing_date());
		
		Farmer far=farmerRepository.findById(projectDto.getFarmer_id());
		Plant pl=plantRepository.findById(projectDto.getPlant_id());
		
		proj.setPlant_id(pl);
		proj.setFarmer_id(far);
		
		
		return projectRepository.save(proj);
	}
	
	@GetMapping("/findAll")
	public List<Project> findAll(){
		return projectRepository.findAll();
	}
	
	@GetMapping("/findById/{id}")
	public Project findById(@PathVariable long id){
		return projectRepository.findById(id);
	}
	
	@PutMapping("/update/{id}")
	public Project updateProject(@PathVariable long id, @RequestBody ProjectDto projectDto) {
		Project proj=projectRepository.findById(id);
		proj.setName(projectDto.getName());
		proj.setArea(projectDto.getArea());
		proj.setCountry(projectDto.getCountry());
		proj.setLocalisation(projectDto.getLocalisation());
		/*
		//formattage des dates au format "yyyy-MM-dd"
		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.FRANCE);
		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd", Locale.FRANCE);
		LocalDate dateA = LocalDate.parse(projectDto.getAnticipated_harvest_date(), inputFormatter);
		LocalDate dateC = LocalDate.parse(projectDto.getContact_date(), inputFormatter);
		LocalDate dateH = LocalDate.parse(projectDto.getHarvest_date(), inputFormatter);
		LocalDate dateS = LocalDate.parse(projectDto.getSowing_date(), inputFormatter);
		String formatteddateA = outputFormatter.format(dateA);
		String formatteddateC = outputFormatter.format(dateC);
		String formatteddateH = outputFormatter.format(dateH);
		String formatteddateS = outputFormatter.format(dateS);
		proj.setAnticipated_harvest_date(formatteddateA);
		proj.setContact_date(formatteddateC);
		proj.setHarvest_date(formatteddateH);
		proj.setSowing_date(formatteddateS);
		*/
		
		proj.setAnticipated_harvest_date(projectDto.getAnticipated_harvest_date());
		proj.setContact_date(projectDto.getContact_date());
		proj.setHarvest_date(projectDto.getHarvest_date());
		proj.setSowing_date(projectDto.getSowing_date());
		
		
		Farmer far=farmerRepository.findById(projectDto.getFarmer_id());
		Plant pl=plantRepository.findById(projectDto.getPlant_id());
		
		proj.setPlant_id(pl);
		proj.setFarmer_id(far);
		
		return projectRepository.save(proj);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteProject(@PathVariable long id) {
		projectRepository.deleteById(id);
	}
	
}
