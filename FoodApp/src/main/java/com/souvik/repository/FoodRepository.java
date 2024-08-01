package com.souvik.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.souvik.entity.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, String>{
	
}
