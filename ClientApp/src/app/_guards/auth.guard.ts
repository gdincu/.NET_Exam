import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable } from 'rxjs/src';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private alertify: AlertifyService) { }

  canActivate(): boolean { 
    /*const roles = next.firstChild.data['roles'] as Array<string>;
    if (roles) {
      const math = this.authService.roleMatch(roles);
      if (math) {
        return true;
      } else {
        this.router.navigate(['users']);
        this.alertify.error('You are not authorized to access this area');
      }
    }*/

    if (this.authService.loggedIn())
      return true;
    
    this.alertify.error('You shall not pass!!!');
    this.router.navigate(['/home']);
    return false;
  }
}
