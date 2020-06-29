import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../shared/booking.model';
import { BookingService } from '../shared/booking.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingsComponent implements OnInit {
  errorMessage: string;
  bookings: Array<Booking>;
  selectedBooking: Booking;
  public GET_ALL_URL: string = 'https://localhost:44379/api/bookings';

  constructor(private http: HttpClient, private bookingService: BookingService, private location: Location, private router: Router) { }

  /* Get list of bookings from the server */
  getBookings() {
    this.bookingService.getBookings()
      .subscribe(
        sarcini => this.bookings = bookings,
        error => this.errorMessage = error as any
      );
  }



  /* Delete a booking based on ints id */
  delete(booking: Booking) {
    if (confirm("Are you sure you want to delete booking with id: " + booking.id + "?")) {
      this.bookingService.delete(booking.id)
        .subscribe(_ => {
          console.log('Sarcina deleted');
          this.bookings = this.bookings.filter(s => s.id !== booking.id);
        },
          error => alert('Cannot delete booking - check if it has comments!'));
    }
  }



  save(userid, locationid, added, start, end, state) {

    var tempBooking = new Booking();
    tempBooking.userid = userid;
    tempBooking.locationid = locationid;
    tempBooking.added = added;
    tempBooking.start = start;
    tempBooking.end = end;
    tempBooking.state = state;

    this.bookingService.save(tempBooking);

  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getBookings();
  }

}
