import { Component, OnInit, Input, Output, EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _Location } from '../../_shared/location.model';
import { LocationService } from '../../_services/location.service';
import { ActivatedRoute, Params, Data } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { AlertifyService } from '../../_services/alertify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-locations-update',
  templateUrl: './locations-update.component.html',
  styleUrls: ['./locations-update.component.css'],
  providers: [LocationService]
})
@Injectable({
  providedIn: 'root'
})
export class LocationsUpdateComponent implements OnInit {
  @Input() location: _Location;
  @Input() values: any;
  @Input() locationToShow: any;
  @Output() cancelUpdate = new EventEmitter();
  model: any = {};

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private locationService: LocationService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private alertify: AlertifyService) { }

  ngOnInit() {
    console.log(this.values);
    console.log(this.locationToShow);
  }

  public locations: _Location[];
  public GET_ALL_COMMENTS_URL: string = 'https://localhost:44379/api/locations';

  getLocations(): void {
    this.http.get<_Location[]>(this.GET_ALL_COMMENTS_URL)
      .subscribe(locations => this.locations = locations.filter(x => x.id == this.locationToShow));
  }

  save(location: _Location): void {
    if (this.locationService.update(location)
      .subscribe())
      this.alertify.success('Location updated!');
    else
      this.alertify.error('Failed to update location!');
  }

  cancel() {
    this.cancelUpdate.emit(false);
    this.alertify.error('Cancelled');
  }

}
