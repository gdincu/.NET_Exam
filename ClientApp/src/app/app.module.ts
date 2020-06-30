import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingsUpdateComponent } from './bookings-update/bookings-update.component';
import { BookingsDetailsComponent } from './bookings-details/bookings-details.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsDetailsComponent } from './locations-details/locations-details.component';
import { LocationsUpdateComponent } from './locations-update/locations-update.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';
import { CommentsUpdateComponent } from './comments-update/comments-update.component';
import { BookingService } from './shared/booking.service';
import { UserService } from './shared/user.service';
import { LocationService } from './shared/location.service';
import { CommentService } from './shared/comment.service';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    BookingsComponent,
    BookingsUpdateComponent,
    BookingsDetailsComponent,
    UsersComponent,
    UsersDetailsComponent,
    UsersUpdateComponent,
    LocationsComponent,
    LocationsDetailsComponent,
    LocationsUpdateComponent,
    CommentsComponent,
    CommentsDetailsComponent,
    CommentsUpdateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'bookings-details', component: BookingsDetailsComponent },
      { path: 'bookings-update', component: BookingsUpdateComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users-details', component: UsersDetailsComponent },
      { path: 'users-update', component: UsersUpdateComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'locations-details', component: LocationsDetailsComponent },
      { path: 'locations-update', component: LocationsUpdateComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'comments-details', component: CommentsDetailsComponent },
      { path: 'comments-update', component: CommentsUpdateComponent }
    ])
  ],
  providers: [BookingService, CommentService, UserService, LocationService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
