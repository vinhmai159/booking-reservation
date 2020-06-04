import { UpdateFoodComponent } from './update-food/update-food.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
const manageMenuRoutes: Routes = [
    {
        path: 'create-food', component: CreateFoodComponent
    },
    {
      path: 'update-food/:id', component: UpdateFoodComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(manageMenuRoutes)],
  exports: [RouterModule],
})
export class ManageMenuRoutingModule {}
