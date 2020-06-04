import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GetOrderDto } from '../../common/get-order.dto';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  getOrder(): Observable<any> {
    return this.firestore.collection('order').snapshotChanges();
  }

   updateStatus(id: string, status: string): Observable<any> {
    const order = this.firestore.collection('order').doc(id).ref.get();
    return this.firestore.collection('order').valueChanges(order);
  }

}
