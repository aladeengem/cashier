import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeatureRouter } from './feature.routes';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRouter,
    ServicesModule
  ],
  exports:[ServicesModule],
  declarations: [HomeComponent, AboutusComponent, ContactComponent, ServicesComponent]
})
export class FeatureModule { }
