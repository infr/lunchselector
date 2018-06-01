import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PlaceComponent } from './place/place.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
// import { routes } from 'app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [/*RouterModule*/]
})
export class AppModule { }
