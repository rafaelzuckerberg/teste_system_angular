import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component'; 
import { ListAdministratorComponent } from './user/administrator/list-administrator/list-administrator.component';
import { CreateAdministratorComponent } from './user/administrator/create-administrator/create-administrator.component';
import { CreateCustomerComponent } from './user/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './user/customer/list-customer/list-customer.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DialogComponent } from './dialog/dialog.component';
import { MaskCellDirective } from '../shared/directives/mask-cell.directive';
import { MaskFixeDirective } from '../shared/directives/mask-fixe.directive';
import { MaskCnpjDirective } from '../shared/directives/mask-cnpj.directive';
import { MaskMoneyDirective } from '../shared/directives/mask-money.directive';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [ 
        LayoutComponent,  
        TopnavComponent, 
        SidebarComponent, 
        ListAdministratorComponent, 
        CreateAdministratorComponent, 
        CreateCustomerComponent, 
        ListCustomerComponent, 
        DialogComponent, 
        MaskCellDirective,
        MaskFixeDirective,
        MaskCnpjDirective, 
        MaskMoneyDirective 
    ],
    entryComponents: [
        CreateAdministratorComponent,
        CreateCustomerComponent,
        DialogComponent
    ], 
})
export class LayoutModule { }
