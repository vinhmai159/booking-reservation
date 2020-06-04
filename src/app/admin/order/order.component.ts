import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../service/order.service';
import { TableService } from '../../../service/table.service';
import {FoodService} from 'src/service/food.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private TableService: TableService,
  ) { }

  orders: any;
  foods: any;

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.orderService.getOrder().subscribe( result => {
      this.orders = result.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        };
      });
    });
  }
  updateStatus(id, status: string) {
    this.orderService.updateStatus(id, status);
  }

}
