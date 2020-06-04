import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { FoodService } from 'src/app/service/food.service.ts';

@Component({
  selector: 'app-oder-food',
  templateUrl: './oder-food.component.html',
  styleUrls: ['./oder-food.component.css']
})
export class OderFoodComponent implements OnInit {


  food:any[];
  constructor(private firestore: AngularFirestore,private foodService:FoodService) { }

  ngOnInit(): void {
    this.foodService.getFood().subscribe(data => {
      this.food = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as any;
      })
      console.log(this.food)
    });
  }

}
