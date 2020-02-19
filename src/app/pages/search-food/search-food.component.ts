import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestApiService } from '../../service/rest-api.service';
import { Foods } from '../../model/foods.model';
import { Router } from '@angular/router';
import { RoutePath } from '../../config/route.path';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.scss']
})
export class SearchFoodComponent {

  searchQuery: string;
  foods: Foods[];

  constructor(private restApiService: RestApiService,
              private router: Router) { 
          }

  searchItem() {
      this.restApiService.getListofFoodItems(this.searchQuery).subscribe( response => {
          this.foods = response.foods;
      })
  }

  getDetailedInfo(food: Foods) {
     this.router.navigate([RoutePath.detail.replace(':id', food.fdcId.toString())]);
  }

}
