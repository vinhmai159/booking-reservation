import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const userRoutes: Routes = [
=======
import { OderFoodComponent } from './oder-food/oder-food.component';



const userRoutes: Routes = [
  {
    path: "oder-food",component: OderFoodComponent
  }
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
