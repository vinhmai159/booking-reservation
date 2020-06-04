import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateTableComponent } from './create-table/create-table.component';
import { ListTableComponent } from './list-table/list-table.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from '../../service/order.service';



@NgModule({
  declarations: [
    AdminComponent,
    CreateTableComponent,
    ListTableComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule

  ],
  providers: [OrderService],
  bootstrap: [
    AdminComponent,
    OrderComponent,
  ]
})
export class AdminModule { }
