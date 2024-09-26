import { Route } from '@angular/router';
import { DriverManagementComponent } from './management/driver-management/driver-management.component';
import { LayoutComponent } from './layout/app.layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () =>
            import('./layout/layout.module').then((m) => m.LayoutModule),
    },
];
