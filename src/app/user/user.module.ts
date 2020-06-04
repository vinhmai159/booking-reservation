import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { OderFoodComponent } from './oder-food/oder-food.component';

@NgModule({
  declarations: [
    UserComponent,
    OderFoodComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
