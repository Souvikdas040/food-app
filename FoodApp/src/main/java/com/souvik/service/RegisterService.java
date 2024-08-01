package com.souvik.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.souvik.entity.Register;
import com.souvik.repository.RegisterRepository;

@Service
public class RegisterService {
	@Autowired
	private RegisterRepository rrepo;
	
	//Adding Data
	public void addData(Register rg) {
		rrepo.save(rg);
	}
	
	//Getting Data
	public List<Register> getData() {
		return rrepo.findAll();
	}
	
	//Getting Data by ID
	public Register findByUserId(String uname) {
		Register r = rrepo.findById(uname).orElse(null);
		return r;
	}
	public Register checkLogin(String uname, String pass) {
		return rrepo.checkLogin(uname, pass);
	}
}
