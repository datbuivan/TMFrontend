import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss']
})
export class TruckComponent implements OnInit {
  routeItems: MenuItem[] = [];
  status: any[] = [];
  selectedDrop: SelectItem = { value: '' };
  truck =[
    {
        id: "44DT-001144",
        load: 1.99,
        brand: "HONDA",
        status: "Đang trống lịch",
        maintenanceStatus: "Đã bảo dưỡng",
        documentStatus: "Cần gia hạn",
        typeActive: "Xe vận hành hộ",
        driverId: "TX-0000001"
    },
    {
        id: "44DT-001144",
        load: 1.99,
        brand: "HONDA",
        status: "Đang trống lịch",
        maintenanceStatus: "Đã bảo dưỡng",
        documentStatus: "Cần gia hạn",
        typeActive: "Xe vận hành hộ",
        driverId: "TX-0000001"
    },
    {
        id: "44DT-001144",
        load: 1.99,
        brand: "HONDA",
        status: "Đang trống lịch",
        maintenanceStatus: "Đã bảo dưỡng",
        documentStatus: "Cần gia hạn",
        typeActive: "Xe vận hành hộ",
        driverId: "TX-0000001"
    },
    {
        id: "44DT-001144",
        load: 1.99,
        brand: "HONDA",
        status: "Đang trống lịch",
        maintenanceStatus: "Đã bảo dưỡng",
        documentStatus: "Cần gia hạn",
        typeActive: "Xe vận hành hộ",
        driverId: "TX-0000001"
    },
    {
        id: "44DT-001144",
        load: 1.99,
        brand: "HONDA",
        status: "Đang trống lịch",
        maintenanceStatus: "Đã bảo dưỡng",
        documentStatus: "Cần gia hạn",
        typeActive: "Xe vận hành hộ",
        driverId: "TX-0000001"
    },
    {
        id: "44DT-001144",
        load: 1.99,
        brand: "HONDA",
        status: "Đang trống lịch",
        maintenanceStatus: "Đã bảo dưỡng",
        documentStatus: "Cần gia hạn",
        typeActive: "Xe vận hành hộ",
        driverId: "TX-0000001"
    },
    {
        id: "44DT-001144",
        load: 1.99,
        brand: "HONDA",
        status: "Đang trống lịch",
        maintenanceStatus: "Đã bảo dưỡng",
        documentStatus: "Cần gia hạn",
        typeActive: "Xe vận hành hộ",
        driverId: "TX-0000001"
    },
    {
        id: "44DT-001144",
        load: 1.99,
        brand: "HONDA",
        status: "Đang trống lịch",
        maintenanceStatus: "Đã bảo dưỡng",
        documentStatus: "Cần gia hạn",
        typeActive: "Xe vận hành hộ",
        driverId: "TX-0000001"
    },
    {
        id: "44DT-001144",
        load: 1.99,
        brand: "HONDA",
        status: "Đang trống lịch",
        maintenanceStatus: "Đã bảo dưỡng",
        documentStatus: "Cần gia hạn",
        typeActive: "Xe vận hành hộ",
        driverId: "TX-0000001"
    },
    {
        id: "44DT-001144",
        load: 1.99,
        brand: "HONDA",
        status: "Đang trống lịch",
        maintenanceStatus: "Đã bảo dưỡng",
        documentStatus: "Cần gia hạn",
        typeActive: "Xe vận hành hộ",
        driverId: "TX-0000001"
    },
  ]
  constructor() { }

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
