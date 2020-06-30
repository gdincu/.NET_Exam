import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

@Injectable({
  providedIn: 'root'
})
export class RegisterComponent {
  model: any = {};

  constructor(private http: HttpClient) { }

  register() {
    console.log(this.model);
  }

  cancel() {
    console.log('cancelled');
  }

}
