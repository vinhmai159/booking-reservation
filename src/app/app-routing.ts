import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { HomePageComponent } from './home-page/home-page.component';
=======

import { UserComponent } from './user/user.component';
>>>>>>> master
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'user',
<<<<<<< HEAD
    component: HomePageComponent,
=======
    component: UserComponent,
>>>>>>> master
  },
  {
      path: 'admin', component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
