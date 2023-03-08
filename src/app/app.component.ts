import { Component } from '@angular/core';
import { FoodService } from './service/food.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'firstproject';
    foodData = []

  constructor(private data: FoodService) {
   
    this.data.getOvedByID('2').subscribe(data => {
        this.foodData = data;

        console.log(this.foodData)
    }
        )

  }
}