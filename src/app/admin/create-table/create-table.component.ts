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
  constructor(
    private route: ActivatedRoute,
    private tableService: TableService,
    private location: Location
  ) { }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.id1 = id;
    if (id != null) {
      this.update = true;
      this.getTableById(id);
    } else {
      this.update = false;
    }
  }
  getTableById(id: string) {
    this.tableService.getTableById(id).then(function(doc) {
      if (doc.exists) {
        console.log(doc.data());
        this.name1 = doc.data().name;
        this.quantity1 = doc.data().quantity;
        console.log(this.name1);
        console.log(this.quantity1);
      } else {
        console.log('There is no document!');
      }
    }).catch(function(error) {
      console.log('There was an error getting your document:', error);
    });
  }
  addTable() {
    this.tableService.createTable({name: this.name1, quantity: this.quantity1, status: false});
    this.location.back();
  }
}
