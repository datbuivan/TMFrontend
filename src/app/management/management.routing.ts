import { Routes } from '@angular/router'
import { DriverManagementComponent } from './driver-management/driver-management.component'
import { TruckComponent } from './truck/truck.component'
import { CustomerComponent } from './customer/customer.component'
import { UnitComponent } from './unit/unit.component'
import { ContractComponent } from './contract/contract.component'
import { TripComponent } from './Trip/Trip.component'
import { RouteComponent } from './Route/Route.component'
import { BillingOperateComponent } from './BillingOperate/BillingOperate.component'
import { AddDriverComponent } from './driver-management/add-driver/add-driver.component'
import { AddBillingOperateComponent } from './BillingOperate/add-billingOperate/add-billingOperate.component'
import { AddContractComponent } from './contract/add-contract/add-contract.component'
import { AddCustomerComponent } from './customer/add-customer/add-customer.component'
import { AddTripComponent } from './Trip/add-trip/add-trip.component'
import { AddTruckComponent } from './truck/add-truck/add-truck.component'
import { AddRouteComponent } from './Route/add-route/add-route.component'
import { AddUnitComponent } from './unit/add-unit/add-unit.component'

export const ManagementRoutes: Routes = [
	{
		path: 'driver',
		component: DriverManagementComponent
	},
	{
        path: 'truck',
        component: TruckComponent
    },
    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: 'unit',
        component: UnitComponent
    },
    {
        path: 'contract',
        component: ContractComponent
    },
    {
        path: 'trip',
        component: TripComponent
    },
    {
        path: 'route',
        component: RouteComponent
    },
    {
        path: 'billingOperate',
        component: BillingOperateComponent
    },
    {
        path: 'add-driver',
        component: AddDriverComponent
    },
    {
        path: 'add-billingOperate',
        component: AddBillingOperateComponent
    },
    {
        path: 'add-contract',
        component: AddContractComponent
    },
    {
        path: 'add-customer',
        component: AddCustomerComponent
    },
    {
        path: 'add-trip',
        component: AddTripComponent
    },
    {
        path: 'add-truck',
        component: AddTruckComponent
    },
    {
        path: 'add-route',
        component: AddRouteComponent
    },
    {
        path: 'add-unit',
        component: AddUnitComponent
    },
]
