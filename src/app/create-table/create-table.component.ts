import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/service/table.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {
  name1: string;
  quantity1: number;
  update: boolean;
  id1: string;
  info = {
    name: '',
    quantity: null,
    status: false
  };
  constructor(
    private route: ActivatedRoute,
    private tableService: TableService,
    private location: Location
  ) { }

  ngOnInit(){
  }
  addTable() {
    this.tableService.createTable({name: this.info.name, quantity: this.info.quantity, status: false});
    this.location.back();
  }
  cancel() {
    this.location.back();
  }
}
