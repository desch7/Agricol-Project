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
import com.example.api.model.Farmer;
import com.example.api.model.Project;
import com.example.api.repository.FarmerRepository;
import com.example.api.repository.ProjectRepository;

@RequestMapping("/api/farmer")
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class FarmerController {
	
	@Autowired
	private FarmerRepository farmerRepository; 
	
	@Autowired
	private ProjectRepository projectRepository;
	
	@PostMapping("/create")
	public Farmer createFarmer(@RequestBody Farmer farmer) {
		return farmerRepository.save(farmer); 
	}
	
	@GetMapping("/findAllDto")
	public List<FarmerDto> findAllDto(){
		List<Farmer> far= farmerRepository.findAll();
		List<FarmerDto> farmerDto= new ArrayList();
		
		for(Farmer f: far) {
			FarmerDto farDt= new FarmerDto();
			farDt.setLabel(f.getName());
			farDt.setValue(f.getId());
			farmerDto.add(farDt);
		}
		
		return farmerDto;
		
	}
	
	@GetMapping("/findAll")
	public List<Farmer> findAll(){
		return farmerRepository.findAll();
	}

	@GetMapping("/findById/{id}")
	public Farmer findById(@PathVariable long id){
		return farmerRepository.findById(id);
	}
	
	@PutMapping("/update/{id}")
	public Farmer updateFarmer(@PathVariable long id, @RequestBody Farmer farmer) {
		Farmer far=farmerRepository.findById(id);
		far.setAge(farmer.getAge());
		far.setBiography(farmer.getBiography());
		far.setEmail(farmer.getEmail());
		far.setName(farmer.getName());
		far.setPhone(farmer.getPhone());
		far.setSexe(farmer.getSexe());
		far.setWhatsapp(farmer.getWhatsapp());
		
		return farmerRepository.save(far);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteFarmer(@PathVariable long id) {
		Farmer far=farmerRepository.findById(id);
		//Project proj=null;
		//try {
		  //proj=projectRepository.findByFarmeridId(far.getId());
		//}catch(Exception e) {
			//e.getCause();
		//}
		
		//if(proj!=null) {
			//projectRepository.deleteById(proj.getId());
			//farmerRepository.deleteById(far.getId());
		//}else {
			farmerRepository.deleteById(far.getId());
		//}
		
		
	}

}
