import { ManageMenuRoutingModule } from './manage-menu/manage-menu-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateTableComponent } from './create-table/create-table.component';
import { ListTableComponent } from './list-table/list-table.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from '../../service/order.service';
import { FormsModule } from '@angular/forms';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { CreateFoodComponent } from './manage-menu/create-food/create-food.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { UpdateFoodComponent } from './manage-menu/update-food/update-food.component';

@NgModule({
  declarations: [
    AdminComponent,
    CreateTableComponent,
    ListTableComponent,
    OrderComponent,
    ManageMenuComponent,
    CreateFoodComponent,
    EditTableComponent,
    UpdateFoodComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ManageMenuRoutingModule

  ],
  providers: [OrderService],
  bootstrap: [
    AdminComponent,
    OrderComponent,
  ]
})
export class AdminModule { }
