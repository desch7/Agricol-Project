package com.example.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.api.model.Plant;

@Repository
public interface PlantRepository extends JpaRepository<Plant,Long>{

	public Plant findById(long id);
}
