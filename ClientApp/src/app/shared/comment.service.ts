import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Comment } from "./comment.model";
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class CommentService {
  private url = 'https://localhost:44379/api/comments';

  comments: Array<Comment>;

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http
      .get<Array<Comment>>(this.url);
  }

  getComment(id: number): Observable<Comment[]> {
    return this.getComments()
      .map(comments => comments.filter(comment => comment.id === id));
  }

  update(comment): Observable<Comment> {
    const url = `${this.url}/${comment.id}`;
    return this.http
      .put<Comment>(url, comment);
  }

  public save(comment: Comment) {
    this.http.post(this.url, comment).subscribe(_ => window.location.reload());
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

}
