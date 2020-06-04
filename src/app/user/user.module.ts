import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
<<<<<<< HEAD



@NgModule({
  declarations: [
    UserComponent
=======
import { OderFoodComponent } from './oder-food/oder-food.component';

@NgModule({
  declarations: [
    UserComponent,
    OderFoodComponent
>>>>>>> master
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
