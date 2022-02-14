package com.example.api.controller;

import java.util.ArrayList;
import java.util.List;

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

import com.example.api.dto.FarmerDto;
import com.example.api.dto.PlantDto;
import com.example.api.model.Farmer;
import com.example.api.model.Plant;
import com.example.api.model.Project;
import com.example.api.repository.PlantRepository;
import com.example.api.repository.ProjectRepository;

@RequestMapping("/api/plant")
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class PlantController {

	@Autowired
	private PlantRepository plantRepository;
	
	@Autowired
	private ProjectRepository projectRepository;
	
	@PostMapping("/create")
	public Plant createPlant(@RequestBody Plant plant) {
		
		return plantRepository.save(plant);
	}
	
	@GetMapping("/findAllDto")
	public List<PlantDto> findAllDto(){
		List<Plant> plt= plantRepository.findAll();
		List<PlantDto> plantDto= new ArrayList();
		
		for(Plant p: plt) {
			PlantDto pltDt= new PlantDto();
			pltDt.setLabel(p.getName());
			pltDt.setValue(p.getId());
			plantDto.add(pltDt);
		}
		
		return plantDto;
		
	}
	
	@GetMapping("/findAll")
	public List<Plant> findAll(){
		return plantRepository.findAll();
	}

	@GetMapping("/findById/{id}")
	public Plant findById(@PathVariable long id){
		return plantRepository.findById(id);
	}
	
	@PutMapping("/update/{id}")
	public Plant updatePlant(@PathVariable long id, @RequestBody Plant plant) {
		Plant pl=plantRepository.findById(id);
		pl.setName(plant.getName());
		pl.setPeriodicite(plant.getPeriodicite());
		pl.setSeed_type(plant.getSeed_type());
		
		return plantRepository.save(pl);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public void deletePlant(@PathVariable long id) {
		Plant pl=plantRepository.findById(id);		
		//Project proj=null;
		//try{
			//proj=projectRepository.findByPlantidId(pl.getId());
		//}catch(Exception e) {
			//e.getCause();
		//}
		//if(proj!=null) {
			//projectRepository.deleteById(proj.getId());
			//plantRepository.deleteById(pl.getId());
		//}else {
			plantRepository.deleteById(pl.getId());
		//}
		
		
	}
}
