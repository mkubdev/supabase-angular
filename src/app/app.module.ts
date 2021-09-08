import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // <-- CommonModule missing from example
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccountComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
