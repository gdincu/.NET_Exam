import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _Location } from '../../_shared/Location.model';
import { LocationService } from '../../_services/Location.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: [LocationService]
})
export class LocationsComponent implements OnInit {

  errorMessage: string;
  values: any;
  locationToShow: number;
  updateMode = false;
  locations: _Location[];
  selectedLocation: _Location;
  public GET_ALL_URL: string = 'https://localhost:44379/api/locations';

  constructor(private http: HttpClient, private locationService: LocationService, private location: Location, private alertify: AlertifyService, private router: Router) { }

  updateToggle(location: _Location) {
    this.updateMode = true;
    this.locationToShow = location.id;
  }

  cancelUpdateMode(updateMode: boolean) {
    this.updateMode = updateMode;
  }

  ngOnInit() {
    this.getLocations();
  }

  /* Get list of Locations from the server */
  getLocations() {
    this.locationService.getLocations()
      .subscribe(
        locations => {
          this.locations = locations,
            this.values = locations,
            error => this.errorMessage = error as any
        }
      );
  }

  /* Delete a Location based on ints id */
  delete(location: _Location) {
    if (confirm("Are you sure you want to delete Location with id: " + location.id + "?")) {
      this.locationService.delete(location.id)
        .subscribe(_ => {
          this.alertify.error('Location deleted');
          this.locations = this.locations.filter(s => s.id !== location.id);
        },
          error => this.alertify.error('Cannot delete Location!'));
    }
  }

  save(id, name, description, link) {

    var tempLocation = new _Location();
    tempLocation.id = id;
    tempLocation.name = name;
    tempLocation.description = description;
    tempLocation.link = link;

    this.locationService.save(tempLocation);

  }

}
