import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetComponent } from './reset.component';
import { ResetRoutingModule } from './reset-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResetComponent
  ],
  imports: [
    CommonModule,
    ResetRoutingModule,
    MaterialModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ResetModule { }
