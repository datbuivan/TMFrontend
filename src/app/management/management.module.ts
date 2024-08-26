import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DriverManagementComponent } from './driver-management/driver-management.component';
import { RouterModule } from '@angular/router';
import { ManagementRoutes } from './management.routing';
import { TruckComponent } from './truck/truck.component';
import { CustomerComponent } from './customer/customer.component';
import { UnitComponent } from './unit/unit.component';
import { ContractComponent } from './contract/contract.component';
import { TripComponent } from './Trip/Trip.component';
import { RouteComponent } from './Route/Route.component';
import { BillingOperateComponent } from './BillingOperate/BillingOperate.component';
import { AddDriverComponent } from './driver-management/add-driver/add-driver.component';
import { CalendarModule } from 'primeng/calendar';
import { ChipModule } from 'primeng/chip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AddBillingOperateComponent } from './BillingOperate/add-billingOperate/add-billingOperate.component';
import { AddContractComponent } from './contract/add-contract/add-contract.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AddRouteComponent } from './Route/add-route/add-route.component';
import { AddTripComponent } from './Trip/add-trip/add-trip.component';
import { AddTruckComponent } from './truck/add-truck/add-truck.component';
import { AddUnitComponent } from './unit/add-unit/add-unit.component';

const importModules = [
    RouterModule.forChild(ManagementRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabMenuModule,
    StepsModule,
    FormsModule,
    TableModule,
    RatingModule,
    ButtonModule,
    SliderModule,
    ChipModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    InputTextareaModule,
];
@NgModule({
    imports: [importModules],
    declarations: [
        DriverManagementComponent,
        TruckComponent,
        CustomerComponent,
        UnitComponent,
        ContractComponent,
        TripComponent,
        RouteComponent,
        BillingOperateComponent,
        AddDriverComponent,
        AddBillingOperateComponent,
        AddContractComponent,
        AddCustomerComponent,
        AddRouteComponent,
        AddTripComponent,
        AddTruckComponent,
        AddUnitComponent
    ],
})
export class ManagementModule {}
