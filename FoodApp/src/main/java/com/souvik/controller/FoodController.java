package com.souvik.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.souvik.entity.Food;
import com.souvik.service.FoodService;

@RestController
@RequestMapping("/food")
@CrossOrigin(origins="http://localhost:3000/")
public class FoodController {
	@Autowired
	private FoodService fservice;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody Food fd) {
		String msg = "FOOD ADDED SUCCESSFULLY";
		fservice.addData(fd);
		return new ResponseEntity<String>(msg, HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Food>> getData() {
		List<Food> flist = fservice.getData();
		return new ResponseEntity<List<Food>>(flist, HttpStatus.OK);
	}
	/*@GetMapping("/fetch")
	public ResponseEntity<List<Food>> getData() {
		List<Food> flist = fservice.getData();
		return new ResponseEntity<List<Food>>(flist, HttpStatus.OK);
	}*/
	@GetMapping("/fetch/{fid}")
	public ResponseEntity<Food> findByOrderId(@PathVariable String fid) {
		Food f = fservice.findByOrderId(fid);
		return new ResponseEntity<Food>(f, HttpStatus.OK);
	}
	@DeleteMapping("/delete/{fid}")
	public ResponseEntity<String> delOrder(@PathVariable String fid) {
		String msg="DATA DELETED SUCCESFULLY";
		fservice.deleteByOrderId(fid);
		return new ResponseEntity<String>(msg, HttpStatus.OK);
	}
	@PutMapping("/update/{fid}")
	public ResponseEntity<Food> updateData(@PathVariable String fid, @RequestBody Food price) {
		Food f = fservice.updateData(fid, price);
		return new ResponseEntity<Food>(f, HttpStatus.OK);
	}

}
