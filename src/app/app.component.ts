import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Platform } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './service/data.service';
import { Router } from '@angular/router';
import { RoutePath } from './config/route.path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges {

  @Input() favouriteFood: any;

  constructor( private platform: Platform,
               private splashScreen: SplashScreen,
               private statusBar: StatusBar,
               private dataService: DataService,
               private router: Router
               ){
      this.initializeApp();
  }

  initializeApp() {
    console.log("initialize app");
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }

  getFavourites($event) {
    console.log("get favourites", $event); 
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log("change detection");
  }

}
