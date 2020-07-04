import { Component, OnInit, Input, Injectable, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Booking } from '../../_shared/booking.model';
import { Comment } from '../../_shared/comment.model';
import { BookingService } from '../../_services/booking.service';
import { CommentService } from '../../_services/comment.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-bookings-details',
  templateUrl: './bookings-details.component.html',
  styleUrls: ['./bookings-details.component.css']
})
export class BookingsDetailsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private commentService: CommentService, private router: Router, private http: HttpClient, private alertify: AlertifyService) { }

  @Input() values: any;
  @Input() bookingToShow: any;
  @Output() cancelDetails = new EventEmitter();
  model: any = {};
  public url = new URL(this.document.location.href);
  public bookings: Booking[];
  public GET_ALL_URL: string = 'https://localhost:44379/api/bookings';
  public comments: Comment[];
  public GET_ALL_COMMENTS_URL: string = 'https://localhost:44379/api/comments';

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    this.http.get<Comment[]>(this.GET_ALL_COMMENTS_URL)
      .subscribe(comments => this.comments = comments.filter(x => x.bookingId == this.bookingToShow));
  }

  /* Delete a comment based on ints id */
  delete(comment: Comment) {
    if (confirm("Are you sure you want to delete comment with id: " + comment.id + "?")) {
      this.commentService.delete(comment.id)
        .subscribe(_ => {
          this.alertify.error('Comment deleted');
          this.comments = this.comments.filter(s => s.id !== comment.id);
        },
          error => alert('Cannot delete comment!'));
    }
  }

  cancel() {
    this.cancelDetails.emit(false);
    this.alertify.success('Booking List page');
  }

}
