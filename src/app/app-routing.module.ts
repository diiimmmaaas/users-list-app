import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { UserListPageComponent } from 'src/app/components/user-list-page/user-list-page.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found-component/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'navigator', component: UserListPageComponent },
  { path: `404`, component: PageNotFoundComponent },
  { path: `**`, redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
