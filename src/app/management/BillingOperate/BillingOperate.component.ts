import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-BillingOperate',
  templateUrl: './BillingOperate.component.html',
  styleUrls: ['./BillingOperate.component.scss']
})
export class BillingOperateComponent implements OnInit {

    routeItems: any[] = [];
    status: any[] = [];
    selectedDrop: any = { value: '' };
    billingOperate =[
      {
          id: "P-000001",
          type: "Phiếu chi",
          name: "Thu chi HĐ",
          status: "Chờ duyệt",
          category: "Thanh toán vé cầu đường",
          costName: "Vé lẻ",
          costGroup: "Chi phí vận hành",
      },
      {
        id: "P-000001",
        type: "Phiếu chi",
        name: "Thu chi HĐ",
        status: "Chờ duyệt",
        category: "Thanh toán vé cầu đường",
        costName: "Vé lẻ",
        costGroup: "Chi phí vận hành",
      },
      {
        id: "P-000001",
        type: "Phiếu chi",
        name: "Thu chi HĐ",
        status: "Chờ duyệt",
        category: "Thanh toán vé cầu đường",
        costName: "Vé lẻ",
        costGroup: "Chi phí vận hành",
      },
      {
        id: "P-000001",
        type: "Phiếu chi",
        name: "Thu chi HĐ",
        status: "Chờ duyệt",
        category: "Thanh toán vé cầu đường",
        costName: "Vé lẻ",
        costGroup: "Chi phí vận hành",
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
