import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsDisplayComponent } from './metrics-display/metrics-display.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MetricsDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MetricsModule { }
