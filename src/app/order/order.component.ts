import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../service/order.service';
import { FoodService } from 'src/service/food.service';
import { TableService } from 'src/service/table.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  listOrders: any;
  foodLists: any;
  check = false;
  constructor(
    private orderService: OrderService,
    private foodService: FoodService,
    private tableService: TableService
    ) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders() {
    this.orderService.getOrders().subscribe(result => {
      this.listOrders = result.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
      console.log(this.listOrders);
    });
  }
  // viewFoods(foods: any) {
  //   this.check = true;
  //   foods.forEach(item => {
  //     console.log(item);
  //     this.foodService.getFood(item).then(doc => {
  //       console.log('data ne: ' + JSON.stringify(doc.data()));
  //       const foodItem = {
  //         foodName: doc.data().name,
  //         price: doc.data().price
  //       }
  //       console.log(foodItem);
  //       this.foodLists.push(foodItem);
  //     });
  //   });
  // }
  deleteOrder(id: string, idTable: string) {
    this.orderService.deleteOrder(id);
    this.updateStatusToFalse(idTable);
    this.getOrders();
  }
  updateStatusToFalse(idTable: string) {
    this.tableService.updateStatusToTrue({id: idTable, status: false});
  }
}
