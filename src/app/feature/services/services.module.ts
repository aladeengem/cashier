import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRouter } from '../services/routes';
import { ProfileComponent } from '../services/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRouter

  ],
  exports:[],
  declarations: [ProfileComponent]
})
export class ServicesModule { }
