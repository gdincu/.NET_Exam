import { Component, OnInit } from '@angular/core';
import { AuthenticationService  } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  model: any = {};
  user: SocialUser;
  checkLoggedIn: boolean = false;

  constructor(
    public authService: AuthenticationService,
    private alertify: AlertifyService,
    private socialAuthService: SocialAuthService) { }


  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully!');
    }, error => {
        this.alertify.error('Failed to log in!');
    });
  }

  loggedIn() {
    /*const token = localStorage.getItem('token');
    return !!token;*/
    return this.authService.loggedIn();
  }

  socialLoggedIn() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      return (user != null);
    });
  }

  logout() {
    localStorage.removeItem('token');
    //this.socialAuthService.signOut();
    this.alertify.message('Logged out!');
  }


  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.checkLoggedIn = (user != null);
    });
  }

}
