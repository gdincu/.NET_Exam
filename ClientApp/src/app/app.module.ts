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
import { RegisterComponent } from './register/register.component';
import { LocationsDetailsComponent } from './locations-details/locations-details.component';
import { LocationsUpdateComponent } from './locations-update/locations-update.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';
import { CommentsUpdateComponent } from './comments-update/comments-update.component';
import { BookingService } from './shared/booking.service';
import { UserService } from './shared/user.service';
import { LocationService } from './shared/location.service';
import { CommentService } from './shared/comment.service';
import { AuthenticationService } from './shared/auth.service';
import { ErrorInterceptorProvider } from './shared/error.interceptor';
import { SocialLoginComponent } from './social-login/social-login.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider  } from 'angularx-social-login';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    CommentsUpdateComponent,
    RegisterComponent,
    SocialLoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
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
      { path: 'comments-update', component: CommentsUpdateComponent },
      { path: 'register', component: RegisterComponent }
    ])
  ],
  providers: [BookingService, CommentService, UserService, LocationService, AuthenticationService, ErrorInterceptorProvider,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('371764760981-solppqt2mm4q4lv2di4p8b1nqe5et17i.apps.googleusercontent.com'),
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
