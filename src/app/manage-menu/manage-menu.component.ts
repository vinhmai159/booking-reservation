import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/service/food.service';

@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.css']
})
export class ManageMenuComponent implements OnInit {
  constructor(private foodSerive: FoodService) { }
  listFoods: any;
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
  deleteFood(id: string) {
    this.foodSerive.deleteFood(id);
  }
}
