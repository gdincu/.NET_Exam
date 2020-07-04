import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../_shared/user.model';
import { UserService } from '../../_services/user.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  errorMessage: string;
  values: any;
  userToShow: number;
  updateMode = false;
  users: User[];
  selectedUser: User;
  public GET_ALL_URL: string = 'https://localhost:44379/api/users';

  constructor(private http: HttpClient, private userService: UserService, private alertify: AlertifyService, private location: Location, private router: Router) { }

  updateToggle(user: User) {
    this.updateMode = true;
    this.userToShow = user.id;
  }

  cancelUpdateMode(updateMode: boolean) {
    this.updateMode = updateMode;
  }

  ngOnInit() {
    this.getUsers();
  }

  /* Get list of comments from the server */
  getUsers() {
    this.userService.getUsers()
      .subscribe(
        users => {
          this.users = users,
            this.values = users,
            error => this.errorMessage = error as any
        }
      );
  }

  /* Delete a comment based on ints id */
  delete(user: User) {
    if (confirm("Are you sure you want to delete user with id: " + user.id + "?")) {
      this.userService.delete(user.id)
        .subscribe(_ => {
          this.alertify.error('user deleted');
          this.users = this.users.filter(s => s.id !== user.id);
        },
          error => this.alertify.error('Cannot delete user!'));
    }
  }

  save(id, name, surname, username, phone, email, isAdmin) {

    var tempUser = new User();
    tempUser.id = id;
    tempUser.name = name;
    tempUser.surname = surname;
    tempUser.username = username;
    tempUser.phone = phone;
    tempUser.email = email;
    tempUser.isAdmin = isAdmin;

    this.userService.saveUser(tempUser);

  }

  goBack() {
    this.location.back();
  }

}
