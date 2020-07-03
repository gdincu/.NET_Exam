import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../../_shared/booking.model';
import { BookingService } from '../../_services/booking.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Data } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { Comment } from '../../_shared/comment.model';

@Component({
  selector: 'app-bookings-update',
  templateUrl: './bookings-update.component.html',
  styleUrls: ['./bookings-update.component.css']
})
export class BookingsUpdateComponent implements OnInit {

  @Input() booking: Booking;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location) { }

  ngOnInit() {
    this.getBookings();
    this.getComments();
    this.route.params
      .switchMap((params: Params) => this.bookingService.getBooking(+params['id']))
      .subscribe(booking => this.booking = booking);
  }

  public url = new URL(this.document.location.href);
  public c = this.url.searchParams.get("bookingid");

  public bookings: Booking[];
  public GET_ALL_URL: string = 'https://localhost:44379/api/bookings';

  public comments: Comment[];
  public GET_ALL_COMMENTS_URL: string = 'https://localhost:44379/api/comments';

  getBookings(): void {
    this.http.get<Booking[]>(this.GET_ALL_URL)
      .subscribe(bookings => this.bookings = bookings.filter(x => x.id == Number(this.c)));
  }

  getComments(): void {
    this.http.get<Comment[]>(this.GET_ALL_COMMENTS_URL)
      .subscribe(comments => this.comments = comments.filter(x => x.bookingId == Number(this.c)));
  }

  save(): void {

    this.bookingService.update(this.bookings[0])
      .subscribe();
  }

}
