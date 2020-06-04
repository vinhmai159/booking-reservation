import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageDto } from '../../common/message-dto';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ExampleService {

    constructor(private http: HttpClient,private firestore: AngularFirestore) { }

    getExampleMessage(): Observable<MessageDto> {
        return this.http.get<MessageDto>('/api/message');
    }
    getPolicies():Observable<any> {
        return this.firestore.collection('order').snapshotChanges();
    }
}