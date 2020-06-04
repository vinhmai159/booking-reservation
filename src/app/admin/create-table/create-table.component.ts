import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/service/table.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {
  name1: string;
  quantity1: number;
  constructor(
    private tableService: TableService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  addTable() {
    this.tableService.createTable({name: this.name1, quantity: this.quantity1});
    this.location.back();
  }
}
