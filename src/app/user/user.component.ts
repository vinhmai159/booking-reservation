import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AngularFirestore } from '@angular/fire/firestore';
import { ExampleService } from '../example.service';
import { snapshotChanges } from '@angular/fire/database/public_api';
>>>>>>> master

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
=======
  policies:any[];
  constructor(private firestore: AngularFirestore,private example:ExampleService) { }

  ngOnInit(): void {
    this.example.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as any;
      })
      console.log(this.policies)
    });
>>>>>>> master
  }

}
