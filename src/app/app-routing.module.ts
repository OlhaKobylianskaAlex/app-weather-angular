import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home-page/home-page.module').then((m) => m.HomeModule),
  },
  {
    path: `favorite`,
    loadChildren: () => import('./modules/favorites-page/favorites-page.module').then((m) => m.FavoritesPageModule),
  },
  {
    path: '**',
    loadChildren: () => import('./modules/error-page/error-page.module').then((m) => m.ErrorPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
