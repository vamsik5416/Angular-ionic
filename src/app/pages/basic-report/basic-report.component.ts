import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { RestApiService } from '../../service/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodNutrients } from '../../model/food-nutrients.model';
import { DataService } from '../../service/data.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { RoutePath } from '../../config/route.path';

@Component({
  selector: 'app-basic-report',
  templateUrl: './basic-report.component.html',
  styleUrls: ['./basic-report.component.scss']
})
export class BasicReportComponent implements OnInit {

  foodId: number;
  description: string;
  foodNutrients: FoodNutrients[];
  foodDetail: any;

  constructor(private restApiService: RestApiService,
              private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    this.foodId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getDetailedReport(this.foodId);
  }

  getDetailedReport(foodId: number) {
      this.restApiService.getDetailedFoodInfo(foodId).subscribe(response => {
          this.foodDetail = response;
          this.description = response.description;
          this.foodNutrients = response.foodNutrients;
      })
  }

  addToFavourites() {
      this.dataService.changeMessage(this.foodId);
      localStorage.setItem('favourites_'+this.foodId, JSON.stringify(this.foodDetail));
      this.router.navigate([RoutePath.home]);

  }

}
