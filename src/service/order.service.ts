import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getOrderById(OrderId: string){
    return this.firestore.collection('order').doc(OrderId).ref.get();
  }
  getOrders(): Observable<any> {
    return this.firestore.collection('order').snapshotChanges();
  }
  deleteOrder(OrderId: string){
    this.firestore.doc('order/' + OrderId).delete();
  }
  createOrder(Order: any){
    console.log('create Order: ' + Order);
    return this.firestore.collection('order').add(Order);
  }

  updateOrder(Order: any){
    this.firestore.doc('order/' + Order.id).update(Order);
  }
}
