import { FoodService } from './../../service/food.service';
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
  info = {
    name: '',
    price: ''
  };
  constructor(
    private foodService: FoodService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  addFood() {
    console.log('add food nè: ' + this.foodName + ', ' + this.foodPrice);
    this.foodService.createFood({name: this.info.name, price: this.info.price + ' VNĐ'});
    this.location.back();
  }
  cancel() {
    this.location.back();
  }
}
