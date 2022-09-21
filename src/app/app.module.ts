import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from 'src/app/home/home.module';
import { PageNotFoundModule } from 'src/app/page-not-found/page-not-found.module';
import { UserListModule } from 'src/app/user-list/user-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, PageNotFoundModule, UserListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
