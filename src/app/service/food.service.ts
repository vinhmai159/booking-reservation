import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient,private firestore: AngularFirestore) { }

  getFood() :Observable<any> {
    return this.firestore.collection('foods').snapshotChanges();
}
}
