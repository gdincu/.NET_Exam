import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AuthenticationService } from '../shared/auth.service';
import { AlertifyService } from '../shared/alertify.service';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {
  user: SocialUser;
  private loggedIn: boolean;

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthenticationService,
    private alertify: AlertifyService,
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
    
    console.log(this.user.firstName);
    console.log(this.user.authToken);
    
      
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

}
