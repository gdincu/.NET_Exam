import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = 'https://localhost:44379/api/auth/';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user)
            localStorage.setItem('token', user.token);
        })
      );
  }

}
