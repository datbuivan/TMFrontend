import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.scss'],
})
export class UnitComponent implements OnInit {
    routeItems: any = [];
    status: any[] = [];
    selectedDrop: any = { value: '' };
    unit = [
        {
            id: 'DV-000001',
            name: "Dầu An Sương",
            group: 'Nhà cung cấp',
            status: 'Đang hoạt động',
            createdDate: '07/01/2024',
            affiliatedTruck: 0,
            scheduledTrip: 0,
            routeCharge: 0,
        },
        {
            id: 'DV-000001',
            name: "Dầu An Sương",
            group: 'Nhà cung cấp',
            status: 'Đang hoạt động',
            createdDate: '07/01/2024',
            affiliatedTruck: 0,
            scheduledTrip: 0,
            routeCharge: 0,
        },
        {
            id: 'DV-000001',
            name: "Dầu An Sương",
            group: 'Nhà cung cấp',
            status: 'Đang hoạt động',
            createdDate: '07/01/2024',
            affiliatedTruck: 0,
            scheduledTrip: 0,
            routeCharge: 0,
        },
        {
            id: 'DV-000001',
            name: "Dầu An Sương",
            group: 'Nhà cung cấp',
            status: 'Đang hoạt động',
            createdDate: '07/01/2024',
            affiliatedTruck: 0,
            scheduledTrip: 0,
            routeCharge: 0,
        },
        {
            id: 'DV-000001',
            name: "Dầu An Sương",
            group: 'Nhà cung cấp',
            status: 'Đang hoạt động',
            createdDate: '07/01/2024',
            affiliatedTruck: 0,
            scheduledTrip: 0,
            routeCharge: 0,
        },
        {
            id: 'DV-000001',
            name: "Dầu An Sương",
            group: 'Nhà cung cấp',
            status: 'Đang hoạt động',
            createdDate: '07/01/2024',
            affiliatedTruck: 0,
            scheduledTrip: 0,
            routeCharge: 0,
        },
        {
            id: 'DV-000001',
            name: "Dầu An Sương",
            group: 'Nhà cung cấp',
            status: 'Đang hoạt động',
            createdDate: '07/01/2024',
            affiliatedTruck: 0,
            scheduledTrip: 0,
            routeCharge: 0,
        },
        {
            id: 'DV-000001',
            name: "Dầu An Sương",
            group: 'Nhà cung cấp',
            status: 'Đang hoạt động',
            createdDate: '07/01/2024',
            affiliatedTruck: 0,
            scheduledTrip: 0,
            routeCharge: 0,
        },
        {
            id: 'DV-000001',
            name: "Dầu An Sương",
            group: 'Nhà cung cấp',
            status: 'Đang hoạt động',
            createdDate: '07/01/2024',
            affiliatedTruck: 0,
            scheduledTrip: 0,
            routeCharge: 0,
        },
        {
            id: 'DV-000001',
            name: "Dầu An Sương",
            group: 'Nhà cung cấp',
            status: 'Đang hoạt động',
            createdDate: '07/01/2024',
            affiliatedTruck: 0,
            scheduledTrip: 0,
            routeCharge: 0,
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
        this.status = [{ label: 'Hoạt động' }, { label: 'Không hoạt động' }];
    }
}
