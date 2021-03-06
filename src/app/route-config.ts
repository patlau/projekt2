import {Routes} from '@angular/router';
import { AboutComponent, LoginComponent} from './front';
import { RegisterComponent, UserMenuComponent } from './user';
import {AuthGuard} from './core/auth/AuthGuard';
import {NotAuthGuard} from './core/auth/NotAuthGuard';
import {StartedGuard} from './core/auth/StartedGuard';
import {UserListComponent} from './user/user-list/user-list.component';
import {PostFrontComponent} from './post/post-front/post-front.component';
import {SearchComponent} from './post/post-search/post-search.component';

export const ROUTE_CONFIG: Routes = [
  { path: '', component: PostFrontComponent, canActivate: [StartedGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [StartedGuard]},
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  { path: 'user', component: UserMenuComponent, canActivate: [AuthGuard]}
];
