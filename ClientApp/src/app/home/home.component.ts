import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../shared/booking.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;

  constructor(private http: HttpClient) {}

  registerToggle() {
    this.registerMode = true;
  }

  ngOnInit() {
    this.getValues();
  }


  getValues() {
    this.http.get<Booking[]>('https://localhost:44379/api/bookings').subscribe(response => {
      this.values = response;
    }, error => {
        console.log(error);
    });
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
