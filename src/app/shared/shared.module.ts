import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AppSettingsStoreModule } from '../store/app-settings-store/app-settings-store.module';
import { ToggleBtnComponent } from './components/toggle-btn/toggle-btn.component';


@NgModule({
  declarations: [HeaderComponent, ToggleBtnComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppSettingsStoreModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [HeaderComponent, ToggleBtnComponent]
})
export class SharedModule { }
