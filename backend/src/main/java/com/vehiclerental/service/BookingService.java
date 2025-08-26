package com.vehiclerental.service;

import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;

import com.vehiclerental.model.Booking;
import com.vehiclerental.model.Vehicle;
import com.vehiclerental.repository.BookingRepository;
import com.vehiclerental.repository.VehicleRepository;


@Service
public class BookingService {
	
	private final BookingRepository bookingRepository;
	private final VehicleRepository vehicleRepository;
	
	public BookingService(BookingRepository bookingRepository, VehicleRepository vehicleRepository)
	{
		this.bookingRepository=bookingRepository;
		this.vehicleRepository=vehicleRepository;
	}

	public Booking createBooking(Booking booking, Long vehicleId) {
	    Vehicle vehicle = vehicleRepository.findById(vehicleId)
	        .orElseThrow(() -> new IllegalArgumentException("Vehicle not found with id: " + vehicleId));
	 
	    if (booking.getStartDate() == null || booking.getEndDate() == null) {
	        throw new IllegalArgumentException("Start date and End date must be provided");
	    }
	 
	    long days = ChronoUnit.DAYS.between(booking.getStartDate(), booking.getEndDate());
	    if (days <= 0) {
	        throw new IllegalArgumentException("End date must be after start date");
	    }
	 
	    double totalPrice = days * vehicle.getPricePerDay();
	 
	    booking.setVehicle(vehicle);
	    booking.setTotalPrice(totalPrice);
	 
	    return bookingRepository.save(booking);
	}
	
	public List<Booking> getAllBookings()
	{
		return bookingRepository.findAll();
	}
	
	public Booking getBookingById(Long id)
	{
		return bookingRepository.findById(id).orElseThrow(()-> new RuntimeException("Booking not found"));
	}
	
	public void deleteBookingById(Long id)
	{
		bookingRepository.deleteById(id);
	}
	
}
