import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageDto } from '../../common/message-dto';
<<<<<<< HEAD

=======
import { AngularFirestore } from '@angular/fire/firestore';
>>>>>>> master

@Injectable()
export class ExampleService {

<<<<<<< HEAD
    constructor(private http: HttpClient) { }
=======
    constructor(private http: HttpClient,private firestore: AngularFirestore) { }
>>>>>>> master

    getExampleMessage(): Observable<MessageDto> {
        return this.http.get<MessageDto>('/api/message');
    }
<<<<<<< HEAD
=======
    getPolicies():Observable<any> {
        return this.firestore.collection('order').snapshotChanges();
    }
>>>>>>> master
}