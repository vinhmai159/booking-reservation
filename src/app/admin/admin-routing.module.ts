import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { ListTableComponent } from './list-table/list-table.component';
import { OrderComponent } from './order/order.component';
import { EditTableComponent } from './edit-table/edit-table.component';
const adminRoutes: Routes = [
    {
        path: 'create-table', component: CreateTableComponent
    },
    {
        path: 'list-tables', component: ListTableComponent
    },
    {
        path: 'edit-tables', component: CreateTableComponent
    },
    {
        path: 'order', component: OrderComponent
    },
    {
        path: 'edit-table/:id', component: EditTableComponent
    },
    {
        path: 'manage-menu', component: ManageMenuComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
