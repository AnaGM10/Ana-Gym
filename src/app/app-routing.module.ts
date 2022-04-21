import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MembersComponent } from './components/members/members.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CartComponent } from './components/shop-gear/cart/cart.component';
import { ProductComponent } from './components/shop-gear/product/product.component';
import { ShopGearComponent } from './components/shop-gear/shop-gear.component';
import { WorkoutDetailsComponent } from './components/workout-details/workout-details.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'workouts',
    component: WorkoutsComponent,
  },
  {
    path: 'workoutDetails/:id',
    component: WorkoutDetailsComponent,
  },
  {
    path: 'nutrition',
    component: NutritionComponent,
  },
  {
    path: 'shop-gear',
    component: ShopGearComponent,
  },
  {
    path: 'shop-gear/:id',
    component: ProductComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'log-in',
    component: LogInComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'workout-list',
    component: WorkoutListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
