import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateTableComponent } from './create-table/create-table.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';



@NgModule({
  declarations: [
    AdminComponent,
    CreateTableComponent,
    ManageMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule

  ]
})
export class AdminModule { }
