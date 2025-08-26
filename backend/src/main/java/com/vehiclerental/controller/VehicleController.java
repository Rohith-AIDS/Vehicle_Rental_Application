package com.vehiclerental.controller;

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

import com.vehiclerental.model.Vehicle;
import com.vehiclerental.service.VehicleService;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/vehicles")
public class VehicleController {
	
	@Autowired
	private VehicleService vehicleService;
	
	@GetMapping
	public List<Vehicle> getAllVehicles()
	{
		return vehicleService.getAllVehicles();
	}
	
	@PostMapping("/bulk")
	public List<Vehicle> addVehicle(@RequestBody List<Vehicle> vehicles)
	{
		return vehicleService.addVehicle(vehicles);
		
	}
	
	@GetMapping("/{id}")
	public Vehicle getVehicleById(@PathVariable Long id)
	{
		return vehicleService.getVehicleById(id);
	}
	
	@PutMapping("/{id}")
	public Vehicle updateVehicle(@PathVariable Long id, Vehicle vehicleDetails)
	{
		return vehicleService.updateVehicle(id,vehicleDetails);
	}
	
	@DeleteMapping("/{id}")
	public String deleteVehicle(@PathVariable Long id)
	{
		vehicleService.deleteVehicle(id);
		return "Vehicle Deleted Successfully";
	}
}
