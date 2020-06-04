import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminComponent } from './admin/admin.component';
import { ListTableComponent } from './list-table/list-table.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { BookingFoodComponent } from './booking-food/booking-food.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'booking-info',
    pathMatch: 'full'
  },
  {
    path: 'booking-info',
    component: BookingInfoComponent,
  },
  {
    path: 'booking-food',
    component: BookingFoodComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'order',
        pathMatch: 'full'
      },
      {
        path: 'food',
        component: ManageMenuComponent,
      },
      {
        path: 'update-food/:id',
        component: UpdateFoodComponent
      },
      {
        path: 'create-food',
        component: CreateFoodComponent
      },
      {
        path: 'create-table',
        component: CreateTableComponent
      },
      {
        path: 'edit-table/:id',
        component: EditTableComponent
      },
      {
        path: 'table',
        component: ListTableComponent,
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
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
