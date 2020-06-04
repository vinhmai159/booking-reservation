import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ExampleService} from './example.service';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { CreateTableComponent } from './admin/create-table/create-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
