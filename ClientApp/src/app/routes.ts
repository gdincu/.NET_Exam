import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    children: [
      {
        path: 'users', component: UsersComponent
      },
      {
        path: 'users/:id', component: UsersDetailsComponent
      },
      {
        path: 'messages', component: MessagesComponent
      },
      {
        path: 'lists', component: ListsComponent
      },
      {
        path: 'admin', component: AdminPanelComponent,
        data: { roles: ['Admin', 'Moderator'] }
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
