import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

import {RouterModule} from '@angular/router';
import {ROUTE_CONFIG} from './route-config';

import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {CoreModule} from './core/core.module';
import {FrontModule} from './front/front.module';
import {environment} from "../environments/environment";

import 'hammerjs';
import {PostModule} from "./post/post.module";
import {ShowModule} from "./show/show.module";
import {SafePipe} from "./shared/safe.pipe";

export const FIREBASE_CONFIG: FirebaseAppConfig = environment.firebase.config;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    RouterModule.forRoot(ROUTE_CONFIG),
    CoreModule,
    UserModule,
    FrontModule,
    PostModule,
    ShowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
