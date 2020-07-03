import { Component, OnInit, Input, Injectable, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../../_shared/booking.model';
import { BookingService } from '../../_services/booking.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Data } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { Comment } from '../../_shared/comment.model';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-bookings-update',
  templateUrl: './bookings-update.component.html',
  styleUrls: ['./bookings-update.component.css']
})
export class BookingsUpdateComponent implements OnInit {

  @Input() booking: Booking;
  @Input() values: any;
  @Input() bookingToShow: any;
  @Output() cancelUpdate = new EventEmitter();
  model: any = {};

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private alertify: AlertifyService,
    private location: Location) { }

  ngOnInit() {
    this.getComments();
    /*this.route.params
      .switchMap((params: Params) => this.bookingService.getBooking(+params['id']))
      .subscribe(booking => this.booking = booking);*/
  }

  public url = new URL(this.document.location.href);
  public bookings: Booking[];
  public comments: Comment[];
  public GET_ALL_COMMENTS_URL: string = 'https://localhost:44379/api/comments';

  getComments(): void {
    this.http.get<Comment[]>(this.GET_ALL_COMMENTS_URL)
      .subscribe(comments => this.comments = comments.filter(x => x.bookingId == this.bookingToShow));
  }

  save(booking: Booking): void {
    if(this.bookingService.update(booking)
      .subscribe())
    this.alertify.success('Booking updated!');
    else
  this.alertify.error('Failed to update booking!');
  }

  cancel() {
    this.cancelUpdate.emit(false);
    this.alertify.error('Cancelled');
  }

}
