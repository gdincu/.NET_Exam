import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AuthenticationService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { User } from '../_shared/user.model';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {
  user: SocialUser;
  private loggedIn: boolean;
  decodedToken: any;
  jwtHelper = new JwtHelperService();

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthenticationService,
    private alertify: AlertifyService,
    private http: HttpClient
  ) { }

  //Checks if a Google user is already logged in
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    let tryLogin = this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    if (!!tryLogin) {
      this.alertify.success(this.user.name + ' logged in successfully!');
      localStorage.setItem('token', this.user.authToken);
      localStorage.setItem('user', this.user.name);
      //const user: User = JSON.parse(localStorage.getItem('user'));
    }
    else
      this.alertify.error('Try again!!');


    //this.decodedToken = this.jwtHelper.decodeToken(this.user.authToken);
    //console.log(this.decodedToken);
  }




  signOut(): void {
    this.socialAuthService.signOut();
  }

}
