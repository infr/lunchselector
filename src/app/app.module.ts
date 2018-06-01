import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PlaceComponent } from './place/place.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
