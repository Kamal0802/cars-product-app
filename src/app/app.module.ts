import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ExploreComponent } from './explore/explore.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { SingleProdComponent } from './explore/single-prod/single-prod.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DeleteprodComponent } from './admin/deleteprod/deleteprod.component';
import { EditprodComponent } from './admin/editprod/editprod.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatagoriesComponent,
    ExploreComponent,
    AdminComponent,
    AddProductComponent,
    SingleProdComponent,
    AdminDashboardComponent,
    DeleteprodComponent,
    EditprodComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
