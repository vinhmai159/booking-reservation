import { FoodService } from './../../../../service/food.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {
  foodName: string;
  foodPrice: number;
  constructor(
    private foodService: FoodService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  addFood() {
    console.log('add food nè: ' + this.foodName + ', ' + this.foodPrice);
    this.foodService.createFood({name: this.foodName, price: this.foodPrice + ' VNĐ'});
    this.location.back();
  }

}
