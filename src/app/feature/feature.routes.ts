import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './services/profile/profile.component';
import { ServicesModule } from './services/services.module';


const servicesEntryPoint = () => {
    return ServicesModule;
}


const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutusComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent, loadChildren: servicesEntryPoint },
    
];

export const FeatureRouter: ModuleWithProviders = RouterModule.forChild(router);