import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { FeatureRouter } from '../routes';

@NgModule({
  imports: [
    CommonModule,
    FeatureRouter
  ],
  declarations: []
})
export class RoutersModule { }
