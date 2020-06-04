import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/service/table.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {
  name1: string;
  quantity1: number;
  id: string;
  constructor(
    private tableService: TableService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTableById();
  }
  getTableById() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.tableService.getTableById(this.id).then(function(doc) {
        console.log(doc);
        this.name1 = doc.data().name;
        this.quantity1 = doc.data().quantity;
        console.log(this.name1);
        console.log(this.quantity1);
    }).catch(function(error) {
      console.log('There was an error getting your document:', error);
    });
  }
  editTable() {
    this.tableService.updateTable({id: this.id, name: this.name1, quantity: this.quantity1});
    this.location.back();
  }
}
