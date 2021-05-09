import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'create-listing',
    loadChildren: () => import('./create-listing/create-listing.module').then( m => m.CreateListingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./sports/sports.module').then( m => m.SportsPageModule)
  },
  {
    path: 'bikes',
    loadChildren: () => import('./bikes/bikes.module').then( m => m.BikesPageModule)
  },
  {
    path: 'furniture',
    loadChildren: () => import('./furniture/furniture.module').then( m => m.FurniturePageModule)
  },
  {
    path: 'gaming',
    loadChildren: () => import('./gaming/gaming.module').then( m => m.GamingPageModule)
  },
  {
    path: 'view-listing',
    loadChildren: () => import('./view-listing/view-listing.module').then( m => m.ViewListingPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'shipping',
    loadChildren: () => import('./shipping/shipping.module').then( m => m.ShippingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
