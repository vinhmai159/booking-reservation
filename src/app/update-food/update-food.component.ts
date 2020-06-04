import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FoodService } from 'src/service/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {
  id: string;
  foodName: string;
  foodPrice: string;
  constructor(
    private foodService: FoodService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.foodService.getFood(this.id).then(doc => {
      console.log('data ne: ' + doc);
      this.foodName = doc.data().name;
      this.foodPrice = doc.data().price;
      this.foodPrice = this.foodPrice.split(' ')[0];
    });
    console.log('id nè: ' + this.id);
  }
  updateFood() {
    this.foodService.updateFood({id: this.id, name: this.foodName, price: this.foodPrice + ' VNĐ'});
    this.location.back();
  }
cancel() {
    this.location.back();
  }
}
