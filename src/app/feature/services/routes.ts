import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from '../services/profile/profile.component';
import { HistoryComponent } from '../services/history/history.component';
import { DepositComponent } from '../services/deposit/deposit.component';
import { WithdrawalComponent } from '../services/withdrawal/withdrawal.component';


const router: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'deposit', component: DepositComponent },
    { path: 'withdrawal', component: WithdrawalComponent },
    { path: 'history', component: HistoryComponent },
];

export const ServicesRouter: ModuleWithProviders = RouterModule.forChild(router);