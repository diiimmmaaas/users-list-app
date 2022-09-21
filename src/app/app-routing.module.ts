import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/home/components/home-page/home-page.component';
import { UserListPageComponent } from 'src/app/user-list/components/user-list-page/user-list-page.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/components/page-not-found-component/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'navigator', component: UserListPageComponent },
  { path: `404`, component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
