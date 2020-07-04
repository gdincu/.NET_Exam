import { Component, OnInit, Input, Injectable, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../_shared/user.model';
import { UserService } from '../../_services/user.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Data } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  @Input() user: User;
  @Input() values: any;
  @Input() userToShow: any;
  @Output() cancelUpdate = new EventEmitter();
  model: any = {};

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private userService: UserService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private alertify: AlertifyService,
    private location: Location) { }

  ngOnInit() {
    console.log(this.values);
    console.log(this.userToShow);
  }

  public url = new URL(this.document.location.href);
  public users: User[];
  public GET_ALL_USERS_URL: string = 'https://localhost:44379/api/users';

  getUsers(): void {
    this.http.get<User[]>(this.GET_ALL_USERS_URL)
      .subscribe(users => this.users = users.filter(x => x.id == this.userToShow));
  }

  save(user: User): void {
    if (this.userService.updateUser(user.id,user)
      .subscribe())
      this.alertify.success('User updated!');
    else
      this.alertify.error('Failed to update user!');
  }

  cancel() {
    this.cancelUpdate.emit(false);
    this.alertify.success('User List');
  }

}
