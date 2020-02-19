import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponentModule } from './components.module';

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,

      AppComponentModule,
      IonicModule.forRoot(),     
      AppRoutingModule,
  ],
  providers: [StatusBar, SplashScreen, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
