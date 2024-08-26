import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Driver', icon: 'pi pi-fw pi-user-minus', routerLink: ['/management/driver'] }
                ]
            },
            {
                items: [
                    {label: 'Truck', icon: 'pi pi-fw pi-truck', routerLink: ['/management/truck']}
                ]
            },
            {
                items: [
                    {label: 'Unit', icon: 'pi pi-fw pi-play', routerLink: ['/management/unit']}
                ]
            },
            {
                items: [
                    {label: 'Customer', icon: 'pi pi-fw pi-user', routerLink: ['/management/customer']}
                ]
            },
            {
                items: [
                    {label: 'Contract', icon: 'pi pi-fw pi-thumbs-up-fill', routerLink: ['/management/contract']}
                ]
            },
            {
                items: [
                    {label: 'Route', icon: 'pi pi-fw pi-forward', routerLink: ['/management/route']}
                ]
            },
            {
                items: [
                    {label: 'Trip', icon: 'pi pi-fw pi-car', routerLink: ['/management/trip']}
                ]
            },
            {
                items: [
                    {label: 'BillingOperate', icon: 'pi pi-fw pi-money-bill', routerLink: ['/management/billingOperate']}
                ]
            },

        ]
    }
}
