import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public bookings: Booking[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Booking[]>(baseUrl + 'api/bookings').subscribe(result => {
      this.bookings = result;
    }, error => console.error(error));
  }
}

interface Booking {
  userid: number;
  locationid: number;
  added: Date;
  start: Date;
  end: Date;
  state: number;
  comments: any[];
}
