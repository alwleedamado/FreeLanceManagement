import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { statics } from './freelancer.statics';
import { reducers } from './state/freelancer/freelancer.reducers';
import { EffectsModule } from '@ngrx/effects';
import { FreelancerEffects } from './state/freelancer/freelancer.effects';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    StoreModule.forFeature(statics.moduleName, reducers),
    EffectsModule.forFeature([
      FreelancerEffects
    ])
  ]
})
export class FreelancerModule { }
