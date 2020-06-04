import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateTableComponent } from './create-table/create-table.component';
<<<<<<< HEAD
import { OrderComponent } from './order/order.component';
=======


>>>>>>> master



@NgModule({
  declarations: [
    AdminComponent,
<<<<<<< HEAD
    CreateTableComponent,
    OrderComponent
=======
    CreateTableComponent
>>>>>>> master
  ],
  imports: [
    CommonModule,
    AdminRoutingModule

  ]
})
export class AdminModule { }
