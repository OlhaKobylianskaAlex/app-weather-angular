import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageMainComponent } from './components/home-page-main/home-page-main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }

