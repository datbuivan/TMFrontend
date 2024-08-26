import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-Trip',
    templateUrl: './Trip.component.html',
    styleUrls: ['./Trip.component.scss'],
})
export class TripComponent implements OnInit {
    routeItems: any[] = [];
    status: any[] = [];
    selectedDrop: any = { value: '' };
    trip = [
        {
            id: 'TX-000001',
            activeTime: "14/02/2024",
            tripTime: "Không đúng giờ",
            status: 'Đang hoạt động',
            name: 'Hà Nội - Hà Nam',
            routeId: 'Ca',
            routeName: "RBS-MN3",
            packageType: 'Quãng đường',
        },
        {
            id: 'TX-000001',
            activeTime: "14/02/2024",
            tripTime: "Không đúng giờ",
            status: 'Đang hoạt động',
            name: 'Hà Nội - Hà Nam',
            routeId: 'Ca',
            routeName: "RBS-MN3",
            packageType: 'Quãng đường',
        },
        {
            id: 'TX-000001',
            activeTime: "14/02/2024",
            tripTime: "Không đúng giờ",
            status: 'Đang hoạt động',
            name: 'Hà Nội - Hà Nam',
            routeId: 'Ca',
            routeName: "RBS-MN3",
            packageType: 'Quãng đường',
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
