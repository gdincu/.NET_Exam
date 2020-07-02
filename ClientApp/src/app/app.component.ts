import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'NET Exam';
  jwtHelper = new JwtHelperService();

  ngOnInit() {
    const token = localStorage.getItem("token");
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  constructor(private authService: AuthenticationService) {  }
}
