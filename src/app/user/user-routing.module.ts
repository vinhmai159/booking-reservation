import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OderFoodComponent } from './oder-food/oder-food.component';



const userRoutes: Routes = [
  {
    path: "oder-food",component: OderFoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
