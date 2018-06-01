import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../shared/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurant: Restaurant;
  restaurants: Restaurant[];

  constructor() {
    this.restaurants = [
      {name: 'Dylan'},
      {name: 'Poijut'},
      {name: 'My Lunch'},
      {name: 'Fazer'},
      {name: 'Yeti'},
      {name: 'Theron'},
      {name: 'Factory Kamppi'},
      {name: 'Subway'},
      {name: 'Eerikin pippuri'},
      {name: 'Burger King'},
      {name: 'Hua Du'},
      {name: 'City Market salad'},
      {name: 'Hima & Sali'},
      {name: 'Theron, Porkkalankatu 3'},
      {name: 'My Lunch'}
    ];

  }

  ngOnInit() {
    this.randomRestaurant();
  }

  public randomRestaurant(): void {
    this.restaurant = this.restaurants[Math.floor(Math.random() * this.restaurants.length)];
  }

}
