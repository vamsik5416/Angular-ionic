import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFoodComponent } from './pages/search-food/search-food.component';
import { BasicReportComponent } from './pages/basic-report/basic-report.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RoutePath } from './config/route.path';
import { FavouritesComponent } from './pages/favourites/favourites.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: RoutePath.home, component: SearchFoodComponent },
  { path: RoutePath.detail, component: BasicReportComponent },
  { path: RoutePath.about, component: AboutComponent },
  { path: RoutePath.contact, component: ContactComponent },
  { path: RoutePath.favourites, component: FavouritesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
