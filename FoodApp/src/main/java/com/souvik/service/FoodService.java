package com.souvik.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.souvik.entity.Food;
import com.souvik.repository.FoodRepository;

@Service
public class FoodService {
	@Autowired
	private FoodRepository frepo;
	public void addData(Food fd) {
		frepo.save(fd);
	}
	public List<Food> getData() {
		return frepo.findAll();
	}
	public Food findByOrderId(String fid) {
		Food f = frepo.findById(fid).orElse(null);
		return f;
	}
	public void deleteByOrderId(String fid) {
		Food f = frepo.findById(fid).orElse(null);
		if(f!=null) {
			frepo.delete(f);
		}
	}
	public Food updateData(String fid, Food price) {
		Food f = frepo.findById(fid).orElse(null);
		if(f!=null) {
			//f.setFid(fid);
			//f.setOqty(ord.getFqty());
			f.setFname(price.getFname());
			f.setPrice(price.getPrice());
			frepo.save(f);
		}
		return f;
	}
}
