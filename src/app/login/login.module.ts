import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'; 

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule, 
        FlexLayoutModule.withConfig({addFlexToParent: false}),
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
