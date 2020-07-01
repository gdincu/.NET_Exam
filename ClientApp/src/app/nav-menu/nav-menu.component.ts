import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AlertifyService } from '../shared/alertify.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  model: any = {};


  constructor(public authService: AuthService, private alertify: AlertifyService) { }
  

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

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out!');
  }

}
