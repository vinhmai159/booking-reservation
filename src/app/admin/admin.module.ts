import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateTableComponent } from './create-table/create-table.component';





@NgModule({
  declarations: [
    AdminComponent,
    CreateTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule

  ]
})
export class AdminModule { }
