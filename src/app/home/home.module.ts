import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from 'src/app/home/components/home-page/home-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class HomeModule {}
