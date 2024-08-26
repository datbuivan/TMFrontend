import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-Route',
    templateUrl: './Route.component.html',
    styleUrls: ['./Route.component.scss'],
})
export class RouteComponent implements OnInit {
    routeItems: any[] = [];
    status: any[] = [];
    selectedDrop: any = { value: '' };
    route = [
        {
            id: 'TX-000001',
            name: 'Hà Nội - Hà Nam',
            tripType: 'Ca',
            status: 'Đang hoạt động',
            customerName: 'GHTK',
            customerId: 'KH-0000001',
            driver: 'Đạt BV',
        },
        {
            id: 'TX-000001',
            name: 'Hà Nội - Hà Nam',
            tripType: 'Ca',
            status: 'Đang hoạt động',
            customerName: 'GHTK',
            customerId: 'KH-0000001',
            driver: 'Đạt BV',
        },
        {
            id: 'TX-000001',
            name: 'Hà Nội - Hà Nam',
            tripType: 'Ca',
            status: 'Đang hoạt động',
            customerName: 'GHTK',
            customerId: 'KH-0000001',
            driver: 'Đạt BV',
        },
    ];
    constructor() {}

    ngOnInit() {
        this.routeItems = [
            { label: 'Tất cả đơn vị', routerLink: '' },
            { label: 'Đơn vị đang hoạt động', routerLink: '' },
            { label: 'Đơn vị bị đình chỉ', routerLink: '' },
            { label: 'Đơn vị ngưng hợp tác', routerLink: '' },
            { label: 'Đơn vị có công nợ', routerLink: '' },
            { label: 'Đơn vị cần thanh toán', routerLink: '' },
        ];
        this.status = [{ label: 'Chính thức' }, { label: 'Chưa chính thức' }];
    }
}
