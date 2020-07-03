import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Booking } from '../../_shared/booking.model';
import { Comment } from '../../_shared/comment.model';
import { BookingService } from '../../_services/booking.service';
import { CommentService } from '../../_services/comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings-details',
  templateUrl: './bookings-details.component.html',
  styleUrls: ['./bookings-details.component.css']
})
export class BookingsDetailsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private commentService: CommentService, private router: Router, private http: HttpClient) { }

  public url = new URL(this.document.location.href);
  public c = this.url.searchParams.get("bookingid");

  public bookings: Booking[];
  public GET_ALL_URL: string = 'https://localhost:44379/api/bookings';

  public comments: Comment[];
  public GET_ALL_COMMENTS_URL: string = 'https://localhost:44379/api/comments';

  ngOnInit() {
    this.getBookings();
    this.getComments();
  }

  getBookings(): void {
    this.http.get<Booking[]>(this.GET_ALL_URL)
      .subscribe(bookings => this.bookings = bookings.filter(x => x.id == Number(this.c)));
  }

  getComments(): void {
    this.http.get<Comment[]>(this.GET_ALL_COMMENTS_URL)
      .subscribe(comments => this.comments = comments.filter(x => x.bookingId == Number(this.c)));
  }

}
