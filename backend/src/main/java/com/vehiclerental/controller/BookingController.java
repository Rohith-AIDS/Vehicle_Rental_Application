package com.vehiclerental.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vehiclerental.model.Booking;
import com.vehiclerental.service.BookingService;

@CrossOrigin(
origins = "http://localhost:5173"
)
@RestController
@RequestMapping("/api/bookings")
public class BookingController {
	
	private final BookingService bookingService;
	
	public BookingController(BookingService bookingService)
	{
		this.bookingService=bookingService;
	}
	
	@PostMapping("/create/{vehicleId}")
	public ResponseEntity<?> createBooking(@RequestBody Booking booking, @PathVariable Long vehicleId) {
	    try {
	        Booking savedBooking = bookingService.createBooking(booking, vehicleId);
	        return ResponseEntity.ok(savedBooking);
	    } catch (IllegalArgumentException e) {
	        return ResponseEntity.badRequest().body(e.getMessage());
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error: " + e.getMessage());
	    }
	}
	
	@GetMapping
	public List<Booking> getAllBookings()
	{
		return bookingService.getAllBookings();
	}
	
	@GetMapping("/{id}")
	public Booking getBookingById(Long id)
	{
		return bookingService.getBookingById(id);
	}
	
	@DeleteMapping("/{id}")
	public String deleteBookingById(Long id)
	{
		bookingService.deleteBookingById(id);
		return "Booking deleted Successfully";
	}
	
}

