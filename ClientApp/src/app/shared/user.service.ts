import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from "./user.model";
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  private url = 'https://localhost:44379/api/users';

  users: Array<User>;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http
      .get<Array<User>>(this.url);
  }

  getUser(id: number): Observable<User[]> {
    return this.getUsers()
      .map(users => users.filter(user => user.id === id));
  }

  update(user): Observable<User> {
    const url = `${this.url}/${user.id}`;
    return this.http
      .put<User>(url, user);
  }

  public save(user: User) {
    this.http.post(this.url, user).subscribe(_ => window.location.reload());
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

}
