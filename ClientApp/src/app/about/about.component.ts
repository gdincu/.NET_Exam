import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { AuthenticationService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AboutComponent implements OnInit {
  @Output() cancelLearnMore = new EventEmitter();
  model: any = {};

  constructor(private http: HttpClient, private authService: AuthenticationService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  cancel() {
    this.cancelLearnMore.emit(false);
    this.alertify.error('Cancelled');
  }

}
