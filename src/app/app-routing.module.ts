import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {PlaceComponent} from './place/place.component';
import {RestaurantComponent} from './restaurant/restaurant.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }

export const routes: Routes = [
  { path: 'piknik', component: PlaceComponent},
  { path: 'lunchselector', component: RestaurantComponent}
];
