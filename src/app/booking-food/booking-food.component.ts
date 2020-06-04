import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/service/table.service';
import { FoodService } from 'src/service/food.service';

@Component({
  selector: 'app-booking-food',
  templateUrl: './booking-food.component.html',
  styleUrls: ['./booking-food.component.css']
})
export class BookingFoodComponent implements OnInit {
  listFoods: any;
  constructor(private foodSerive: FoodService) { }

  ngOnInit(): void {
    this.getFoods();
  }
  getFoods() {
    this.foodSerive.getFoods().subscribe(result => {
      this.listFoods = result.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
      console.log(this.listFoods);
    });
  }
}
