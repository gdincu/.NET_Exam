"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
var home_component_1 = require("./home/home.component");
var users_component_1 = require("./users/users/users.component");
var bookings_component_1 = require("./bookings/bookings/bookings.component");
var messages_component_1 = require("./messages/messages.component");
var lists_component_1 = require("./lists/lists.component");
var admin_panel_component_1 = require("./admin/admin-panel/admin-panel.component");
var auth_guard_1 = require("./_guards/auth.guard");
exports.appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: 'users',
                component: users_component_1.UsersComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'messages', component: messages_component_1.MessagesComponent
            },
            {
                path: 'lists', component: lists_component_1.ListsComponent
            },
            {
                path: 'bookings', component: bookings_component_1.BookingsComponent
            },
            {
                path: 'admin', component: admin_panel_component_1.AdminPanelComponent,
                data: { roles: ['Admin', 'Moderator'] }
            }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
//# sourceMappingURL=routes.js.map