import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { NotfoundComponent } from './../demo/components/notfound/notfound.component';
import {  LayoutComponent } from "./../layout/app.layout.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeModule } from 'primeng/badge';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { AppConfigModule } from './config/config.module';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppMenuComponent } from './app.menu.component';
import { AppSidebarComponent } from './app.sidebar.component';
import { DriverManagementComponent } from '../management/driver-management/driver-management.component';

const mainRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '',
              component: DriverManagementComponent
            },
            { path: 'management', loadChildren: () => import('./../management/management.module').then(m => m.ManagementModule)},
        ]
    },
    { path: '**', redirectTo: '/notfound' },
]

@NgModule({
    declarations: [
        LayoutComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        LayoutComponent,
        NotfoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        RouterModule.forChild(mainRoutes)
    ],
    exports: [LayoutComponent,RouterModule]
})
export class LayoutModule {
}
