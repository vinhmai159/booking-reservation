import { ManageMenuRoutingModule } from './manage-menu/manage-menu-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateTableComponent } from './create-table/create-table.component';
import { ListTableComponent } from './list-table/list-table.component';
import { FormsModule } from '@angular/forms';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { CreateFoodComponent } from './manage-menu/create-food/create-food.component';



@NgModule({
  declarations: [
    AdminComponent,
    CreateTableComponent,
    ListTableComponent,
    ManageMenuComponent,
    CreateFoodComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ManageMenuRoutingModule

  ]
})
export class AdminModule { }
