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
      'Theron',
      'Factory Kamppi',
      'Subway',
      'Eerikin pippuri',
      'Burger King',
      'Hua Du',
      'City Market salad',
      'Hima & Sali',
      '.. Sorry I have really no idea.. 😩'
    ];
  }

  ngOnInit() {
    this.restaurant = this.restaurants[Math.floor(Math.random() * this.restaurants.length)];
  }

}
