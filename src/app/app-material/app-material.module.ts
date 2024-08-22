import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports: [
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
