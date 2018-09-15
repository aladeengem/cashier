import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRouter } from '../services/routes';
import { ProfileComponent } from '../services/profile/profile.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRouter

  ],
  exports:[],
  declarations: [ProfileComponent, DepositComponent, WithdrawalComponent, HistoryComponent]
})
export class ServicesModule { }
