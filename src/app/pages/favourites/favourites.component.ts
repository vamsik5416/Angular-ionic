import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { RoutePath } from '../../config/route.path';
import { RestApiService } from '../../service/rest-api.service';
import { FoodNutrients } from '../../model/food-nutrients.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouriteList = [];
  foodNutrients: FoodNutrients[];
  showFavourites = false;

  constructor(private dataService: DataService,
              private restApiService: RestApiService,
              private router: Router) { 
      }

  ngOnInit() {
    this.getLocalStorageList();
  }


  getLocalStorageList() {
    let list=[];
    this.favouriteList = [];
    Object.keys(localStorage).forEach(function(key){
     list.push(JSON.parse(localStorage.getItem(key)));  
   });

  this.favouriteList = list;
  this.showFavourites = true;

  }

  getDetail(item) {
    this.foodNutrients = [];
    this.restApiService.getDetailedFoodInfo(item.fdcId).subscribe(response => {
        this.foodNutrients = response.foodNutrients;
  })
  }

  remove(item) {
      localStorage.removeItem('favourites_'+item.fdcId);
      this.foodNutrients = [];
      this.getLocalStorageList();
      
  }

}
