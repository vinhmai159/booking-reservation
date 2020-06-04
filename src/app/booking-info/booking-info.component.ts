import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/service/table.service';
import { OrderService } from 'src/service/order.service';
import { Router } from '@angular/router';
import { FoodService } from 'src/service/food.service';
@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {
  info = {
    name: '',
    cmnd: '',
    jcg: '',
    phone: '',
    table: null
  };
  listFoods = [];
  tables = [];
  constructor(
    private tableService: TableService,
    private orderService: OrderService,
    private foodSerive: FoodService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTable();
    this.getFoods();
  }
  getTable() {
    this.tableService.getUsers().subscribe(result => {
      this.tables = result.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      }).filter(item => item.status === false);

    });
  }
  addBooking() {
    const list = this.listFoods.filter(item => {
      return item.status === true;
    });
    this.tableService.getTableById(this.info.table).then(doc => {
      const temp = {
        cmnd: this.info.cmnd,
        name: this.info.name,
        phone: this.info.phone,
        table:
        {
          id: this.info.table,
          name: doc.data().name,
          quantity: doc.data().quantity
        },
        status: true,
        foods: list
      };
      this.orderService.createOrder(temp);
      this.updateStatusToTrue();
    })




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
  updateStatusToTrue() {
    this.tableService.updateStatusToTrue({id: this.info.table, status: true});
  }
}
