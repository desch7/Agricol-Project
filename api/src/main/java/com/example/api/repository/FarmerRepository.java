package com.example.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.api.model.Farmer;

@Repository
public interface FarmerRepository extends JpaRepository<Farmer,Long>{
	
	public Farmer findById(long id);

}
