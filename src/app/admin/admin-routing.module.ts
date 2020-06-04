import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateTableComponent } from './create-table/create-table.component';
const adminRoutes: Routes = [
    {
        path: 'manage-menu', component: ManageMenuComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
