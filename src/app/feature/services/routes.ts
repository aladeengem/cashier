import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from '../services/profile/profile.component';


const router: Routes = [
    { path: 'profile', component: ProfileComponent }
];

export const ServicesRouter: ModuleWithProviders = RouterModule.forChild(router);