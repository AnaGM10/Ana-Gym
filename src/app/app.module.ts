import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {  MatTableModule } from '@angular/material/table';


import { CarouselModule, WavesModule, MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { ShopGearComponent } from './components/shop-gear/shop-gear.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { MembersComponent } from './components/members/members.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { ProductComponent } from './components/shop-gear/product/product.component';
import { CartComponent } from './components/shop-gear/cart/cart.component';
import { TestComponent } from './components/test/test.component';
import { WorkoutDetailsComponent } from './components/workout-details/workout-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorkoutsComponent,
    NutritionComponent,
    ShopGearComponent,
    FooterComponent,
    RegistrationComponent,
    LogInComponent,
    MembersComponent,

    WorkoutListComponent,
     ProductComponent,
     CartComponent,
     TestComponent,
     WorkoutDetailsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    CarouselModule,
    WavesModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
