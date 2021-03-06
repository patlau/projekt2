import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {PostModule} from '../post/post.module';
import {ShowModule} from '../show/show.module';
import {HomeComponent} from './home/home.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    CoreModule,
    PostModule,
    ShowModule
  ],
  declarations: [
    AboutComponent,
    LoginComponent,
    HomeComponent
  ],
  exports: [
    AboutComponent
    ]
})
export class FrontModule { }
