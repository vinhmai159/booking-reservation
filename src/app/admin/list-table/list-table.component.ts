import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../service/table.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
  constructor(private tableService: TableService) { }
  listTables: any;
  ngOnInit(): void {
    this.getTable();
  }
  getTable() {
    this.tableService.getUsers().subscribe(result => {
      this.listTables = result.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
      console.log(this.listTables);
    });
  }
  deleteTable(id: string) {
    this.tableService.deleteTable(id);
  }
}

