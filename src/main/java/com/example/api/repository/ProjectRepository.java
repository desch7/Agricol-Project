package com.example.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.api.model.Farmer;
import com.example.api.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project,Long>{
	
	public Project findById(long id);
	
	public Project findByFarmeridId(long id);
	
	public Project findByPlantidId(long id);
	
	

}
