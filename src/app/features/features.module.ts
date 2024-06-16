import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './main-screen/card/card.component';

@NgModule({
  declarations: [
    MainScreenComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
