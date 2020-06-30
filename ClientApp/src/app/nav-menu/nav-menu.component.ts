import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  model: any = {};


  constructor(private authService: AuthService) {}
  

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully!');
    }, error => {
      console.log('Failed to log in!');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out!');
  }

}
