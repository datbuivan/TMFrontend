import { Customer } from './../../demo/api/customer';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
    routeItems: any = [];
    status: any[] = [];
    selectedDrop: any = { value: '' };
    customer = [
        {
            id: 'KH-000001',
            name: 'GHTK',
            group: 'B2B',
            status: 'Đang phục vụ',
            contact: 'Lê Thị Ngọc Bích',
            phoneNumber: '01735183193',
            saleCharge: "Nguyễn Văn Đại",
            coordinatorCharge: "Lê Đình Đăng",
            contractId: "HD-0000005"
        },
        {
            id: 'KH-000001',
            name: 'GHTK',
            group: 'B2B',
            status: 'Đang phục vụ',
            contact: 'Lê Thị Ngọc Bích',
            phoneNumber: '01735183193',
            saleCharge: "Nguyễn Văn Đại",
            coordinatorCharge: "Lê Đình Đăng",
            contractId: "HD-0000005"
        },
        {
            id: 'KH-000001',
            name: 'GHTK',
            group: 'B2B',
            status: 'Đang phục vụ',
            contact: 'Lê Thị Ngọc Bích',
            phoneNumber: '01735183193',
            saleCharge: "Nguyễn Văn Đại",
            coordinatorCharge: "Lê Đình Đăng",
            contractId: "HD-0000005"
        },
        {
            id: 'KH-000001',
            name: 'GHTK',
            group: 'B2B',
            status: 'Đang phục vụ',
            contact: 'Lê Thị Ngọc Bích',
            phoneNumber: '01735183193',
            saleCharge: "Nguyễn Văn Đại",
            coordinatorCharge: "Lê Đình Đăng",
            contractId: "HD-0000005"
        },
        {
            id: 'KH-000001',
            name: 'GHTK',
            group: 'B2B',
            status: 'Đang phục vụ',
            contact: 'Lê Thị Ngọc Bích',
            phoneNumber: '01735183193',
            saleCharge: "Nguyễn Văn Đại",
            coordinatorCharge: "Lê Đình Đăng",
            contractId: "HD-0000005"
        },
        {
            id: 'KH-000001',
            name: 'GHTK',
            group: 'B2B',
            status: 'Đang phục vụ',
            contact: 'Lê Thị Ngọc Bích',
            phoneNumber: '01735183193',
            saleCharge: "Nguyễn Văn Đại",
            coordinatorCharge: "Lê Đình Đăng",
            contractId: "HD-0000005"
        },
        {
            id: 'KH-000001',
            name: 'GHTK',
            group: 'B2B',
            status: 'Đang phục vụ',
            contact: 'Lê Thị Ngọc Bích',
            phoneNumber: '01735183193',
            saleCharge: "Nguyễn Văn Đại",
            coordinatorCharge: "Lê Đình Đăng",
            contractId: "HD-0000005"
        },
        {
            id: 'KH-000001',
            name: 'GHTK',
            group: 'B2B',
            status: 'Đang phục vụ',
            contact: 'Lê Thị Ngọc Bích',
            phoneNumber: '01735183193',
            saleCharge: "Nguyễn Văn Đại",
            coordinatorCharge: "Lê Đình Đăng",
            contractId: "HD-0000005"
        },
        {
            id: 'KH-000001',
            name: 'GHTK',
            group: 'B2B',
            status: 'Đang phục vụ',
            contact: 'Lê Thị Ngọc Bích',
            phoneNumber: '01735183193',
            saleCharge: "Nguyễn Văn Đại",
            coordinatorCharge: "Lê Đình Đăng",
            contractId: "HD-0000005"
        },
        {
            id: 'KH-000001',
            name: 'GHTK',
            group: 'B2B',
            status: 'Đang phục vụ',
            contact: 'Lê Thị Ngọc Bích',
            phoneNumber: '01735183193',
            saleCharge: "Nguyễn Văn Đại",
            coordinatorCharge: "Lê Đình Đăng",
            contractId: "HD-0000005"
        },
    ];
    constructor() {}

    ngOnInit() {
        this.routeItems = [
            { label: 'Tất cả khách hàng', routerLink: '' },
            { label: 'B2B', routerLink: '' },
            { label: 'B2C', routerLink: '' },


        ];
        this.status = [{ label: 'Đang phục vụ' }, { label: 'Đang chờ phục vụ' }];
    }
}
