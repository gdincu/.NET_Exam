import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;

  constructor(private http: HttpClient) {}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  ngOnInit() {
    this.getValues();
  }


  getValues() {
    this.http.get('https://localhost:44379/api/bookings').subscribe(response => {
      this.values = response;
    }, error => {
        console.log(error);
    });
  }
}
