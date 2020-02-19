import { NgModule } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { BasicReportComponent } from './pages/basic-report/basic-report.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchFoodComponent } from './pages/search-food/search-food.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavouritesComponent } from './pages/favourites/favourites.component';

const components = [
    AboutComponent,
    BasicReportComponent,
    ContactComponent,
    SearchFoodComponent,
    FavouritesComponent
]

@NgModule( {
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        components
    ],
    entryComponents: [],
    exports: [],
    providers: [], 
})
export class AppComponentModule { }