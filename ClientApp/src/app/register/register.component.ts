import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { AuthenticationService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

@Injectable({
  providedIn: 'root'
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private http: HttpClient, private authService: AuthenticationService, private alertify: AlertifyService) { }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration worked!!');
    }, error => {
        this.alertify.error(error);
    });
  }

  ngOnInit() {
    
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('cancelled');
  }

}
