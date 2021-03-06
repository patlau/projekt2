import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';
import {USER_ROUTE_CONFIG} from './user-route-config';
import {SharedModule} from '../shared/shared.module';
import {RegisterComponent} from './register/register.component';
import {UserMenuComponent} from './user-menu/user-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(USER_ROUTE_CONFIG)
  ],
  declarations: [
    UserListComponent,
    UserComponent,
    UserDetailsComponent,
    RegisterComponent,
    UserMenuComponent
  ],
  exports: [
    UserMenuComponent
  ],
  entryComponents: [
    UserMenuComponent
  ]
})
export class UserModule { }
