package com.vehiclerental.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vehiclerental.model.Booking;

public interface BookingRepository extends JpaRepository<Booking,Long> {

}
