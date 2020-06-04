import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { OrderComponent } from './order/order.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { BookingFoodComponent } from './booking-food/booking-food.component';
import { ListTableComponent } from './list-table/list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminComponent,
    UserComponent,
    CreateTableComponent,
    EditTableComponent,
    ManageMenuComponent,
    CreateFoodComponent,
    UpdateFoodComponent,
    OrderComponent,
    BookingInfoComponent,
    BookingFoodComponent,
    ListTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
