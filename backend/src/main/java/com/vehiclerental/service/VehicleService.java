package com.vehiclerental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vehiclerental.model.Vehicle;
import com.vehiclerental.repository.VehicleRepository;

@Service
public class VehicleService {
	
	@Autowired
	private VehicleRepository vehicleRepository;
	
	public List<Vehicle> getAllVehicles()
	{
		return vehicleRepository.findAll();
	}
	
	public List<Vehicle> addVehicle(List<Vehicle> vehicles)
	{
		return vehicleRepository.saveAll(vehicles);
	}
	
	public Vehicle getVehicleById(Long id)
	{
		return vehicleRepository.findById(id).orElseThrow(()-> new RuntimeException("Vehicle not found"));
	}
	
	public Vehicle updateVehicle(Long id, Vehicle vehicleDetails)
	{
		Vehicle vehicle=getVehicleById(id);
		vehicle.setVehicleNumber(vehicleDetails.getVehicleNumber());
		vehicle.setType(vehicleDetails.getType());
		vehicle.setPricePerDay(vehicleDetails.getPricePerDay());
		vehicle.setModel(vehicleDetails.getModel());
		vehicle.setAvailability(vehicleDetails.isAvailability());
		return vehicleRepository.save(vehicle);
	}
	
	public void deleteVehicle(Long id)
	{
		vehicleRepository.deleteById(id);
	}
}
