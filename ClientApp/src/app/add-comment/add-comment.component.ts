import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Comment } from '../_shared/comment.model';
import { CommentService } from '../_services/comment.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(private http: HttpClient, private commentService: CommentService, private location: Location, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  save(content, rating, bookingId) {

    var tempComment = new Comment();
    tempComment.content = content;
    tempComment.rating = rating;
    tempComment.bookingId = Number(bookingId);
    
    
    this.alertify.warning('Comment added');

  }

}
