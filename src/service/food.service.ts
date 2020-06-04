import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getFoods(): Observable<any> {
    return this.firestore.collection('foods').snapshotChanges();
  }
  deleteTable(foodId: string){
    this.firestore.doc('foods/' + foodId).delete();
  }
  createTable(food: any){
    return this.firestore.collection('foods').add(food);
  }
  updateTable(food: any){
    delete food.id;
    this.firestore.doc('foods/' + food.id).update(food);
  }
}
