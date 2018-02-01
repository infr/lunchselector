import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurant: string;
  restaurants: string[];

  constructor() {
    this.restaurants = [
      'Dylan',
      'Poijut',
      'My Lunch',
      'Fazer',
      'Yeti',
      'Theron'
    ];
  }

  ngOnInit() {
    this.restaurant = this.restaurants[Math.floor(Math.random() * this.restaurants.length)];
  }

}
