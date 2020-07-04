import { Component, OnInit, Input, Injectable, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../_shared/comment.model';
import { CommentService } from '../../_services/comment.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Data } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-comments-update',
  templateUrl: './comments-update.component.html',
  styleUrls: ['./comments-update.component.css']
})
export class CommentsUpdateComponent implements OnInit {

  @Input() comment: Comment;
  @Input() values: any;
  @Input() commentToShow: any;
  @Output() cancelUpdate = new EventEmitter();
  model: any = {};

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private alertify: AlertifyService,
    private location: Location) { }

  ngOnInit() {
    console.log(this.values);
    console.log(this.commentToShow);
  }

  public url = new URL(this.document.location.href);
  public comments: Comment[];
  public GET_ALL_COMMENTS_URL: string = 'https://localhost:44379/api/comments';

  getComments(): void {
    this.http.get<Comment[]>(this.GET_ALL_COMMENTS_URL)
      .subscribe(comments => this.comments = comments.filter(x => x.id == this.commentToShow));
  }

  save(comment: Comment): void {
    if (this.commentService.update(comment)
      .subscribe())
      this.alertify.success('Comment updated!');
    else
      this.alertify.error('Failed to update comment!');
  }

  cancel() {
    this.cancelUpdate.emit(false);
    this.alertify.success('Comment List');
  }

}
