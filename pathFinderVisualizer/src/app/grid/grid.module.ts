import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridDisplayComponent } from './grid-display/grid-display.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GridDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GridDisplayComponent
  ]
})
export class GridModule { }
