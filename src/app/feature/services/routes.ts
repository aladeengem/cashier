import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from '../services/profile/profile.component';


const router: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent }
];

export const FeatureRouter: ModuleWithProviders = RouterModule.forChild(router);