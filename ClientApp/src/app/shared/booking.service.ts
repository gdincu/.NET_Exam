import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Booking } from "./booking.model";
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class BookingService {
  private url = 'https://localhost:44379/api/bookings';

  bookings: Array<Booking>;

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http
      .get<Array<Booking>>(this.url);
  }

  getComment(id: number): Observable<Booking[]> {
    return this.getBookings()
      .map(bookings => bookings.filter(booking => booking.id === id));
  }

  update(booking): Observable<Booking> {
    const url = `${this.url}/${booking.id}`;
    return this.http
      .put<Booking>(url, booking);
  }

  public save(booking: Booking) {
    this.http.post(this.url, booking).subscribe(_ => window.location.reload());
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

}
