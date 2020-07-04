import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { _Location } from '../_shared/location.model';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class LocationService {
  private url = 'https://localhost:44379/api/locations';

  locations: Array<_Location >;

  constructor(private http: HttpClient) { }

  getLocations(): Observable<_Location []> {
    return this.http
      .get<Array<_Location >>(this.url);
  }

  getLocation(id: number): Observable<_Location []> {
    return this.getLocations()
      .map(locations => locations.filter(location => location.id === id));
  }

  update(location): Observable<_Location > {
    const url = `${this.url}/${location.id}`;
    return this.http
      .put<_Location >(url, location);
  }

  public save(location: _Location ) {
    this.http.post(this.url, location).subscribe(_ => window.location.reload());
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

}
