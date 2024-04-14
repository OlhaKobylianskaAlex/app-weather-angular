import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageMainComponent } from './components/favorites-page-main/favorites-page-main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FavoritesPageMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesPageRoutingModule { }

