import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../_shared/comment.model';
import { CommentService } from '../../_services/comment.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  errorMessage: string;
  values: any;
  commentToShow: number;
  updateMode = false;
  comments: Comment[];
  selectedComment: Comment;
  public GET_ALL_URL: string = 'https://localhost:44379/api/comments';

  constructor(private http: HttpClient, private commentService: CommentService, private alertify: AlertifyService, private location: Location, private router: Router) { }

  updateToggle(comment: Comment) {
    this.updateMode = true;
    this.commentToShow = comment.id;
  }

  cancelUpdateMode(updateMode: boolean) {
    this.updateMode = updateMode;
  }

  ngOnInit() {
    this.getcomments();
  }

  /* Get list of comments from the server */
  getcomments() {
    this.commentService.getComments()
      .subscribe(
        comments => {
          this.comments = comments,
            this.values = comments,
            error => this.errorMessage = error as any
        }
      );
  }

  /* Delete a comment based on ints id */
  delete(comment: Comment) {
    if (confirm("Are you sure you want to delete comment with id: " + comment.id + "?")) {
      this.commentService.delete(comment.id)
        .subscribe(_ => {
          this.alertify.error('comment deleted');
          this.comments = this.comments.filter(s => s.id !== comment.id);
        },
          error => this.alertify.error('Cannot delete comment!'));
    }
  }

  save(id, added, content, rating, bookingId) {

    var tempcomment = new Comment();
    tempcomment.id = id;
    tempcomment.added = added;
    tempcomment.content = content;
    tempcomment.rating = rating;
    tempcomment.bookingId = bookingId;

    this.commentService.save(tempcomment);

  }

  goBack() {
    this.location.back();
  }

}
