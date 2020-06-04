import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private db: AngularFirestore) { }
  // createUser(value, avatar){
  //   return this.db.collection('table').add({
  //     name: value.name,
  //     nameToSearch: value.name.toLowerCase(),
  //     surname: value.surname,
  //     age: parseInt(value.age),
  //     avatar: avatar
  //   });
  // }
  getUsers(): Observable<any> {
    return this.db.collection('/table').snapshotChanges();
  }
  deleteTable(tableId: string){
    this.db.doc('table/' + tableId).delete();
  }
  createTable(table: any){
    return this.db.collection('table').add(table);
  }
  updateTable(table: any){
    delete table.id;
    this.db.doc('table/' + table.id).update(table);
  }
}
