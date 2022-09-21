import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListPageComponent } from 'src/app/user-list/components/user-list-page/user-list-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [UserListPageComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class UserListModule {}
