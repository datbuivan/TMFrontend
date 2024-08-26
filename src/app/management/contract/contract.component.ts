import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

    routeItems: any[] = [];
    status: any[] = [];
    selectedDrop: any = { value: '' };
    contract =[
      {
          id: "HĐ-000001",
          name: "Thu chi HĐ",
          contractType: "Dài hạn",
          status: "Đang kích hoạt",
          customerName: "ETON",
          customerId: "KH-0000001",
          customerGroup: "B2B",
      },
      {
          id: "HĐ-000001",
          name: "Thu chi HĐ",
          contractType: "Dài hạn",
          status: "Đang kích hoạt",
          customerName: "ETON",
          customerId: "KH-0000001",
          customerGroup: "B2B",
      },
      {
          id: "HĐ-000001",
          name: "Thu chi HĐ",
          contractType: "Dài hạn",
          status: "Đang kích hoạt",
          customerName: "ETON",
          customerId: "KH-0000001",
          customerGroup: "B2B",
      },
      {
          id: "HĐ-000001",
          name: "Thu chi HĐ",
          contractType: "Dài hạn",
          status: "Đang kích hoạt",
          customerName: "ETON",
          customerId: "KH-0000001",
          customerGroup: "B2B",
      },
      {
          id: "HĐ-000001",
          name: "Thu chi HĐ",
          contractType: "Dài hạn",
          status: "Đang kích hoạt",
          customerName: "ETON",
          customerId: "KH-0000001",
          customerGroup: "B2B",
      },
      {
          id: "HĐ-000001",
          name: "Thu chi HĐ",
          contractType: "Dài hạn",
          status: "Đang kích hoạt",
          customerName: "ETON",
          customerId: "KH-0000001",
          customerGroup: "B2B",
      },
      {
          id: "HĐ-000001",
          name: "Thu chi HĐ",
          contractType: "Dài hạn",
          status: "Đang kích hoạt",
          customerName: "ETON",
          customerId: "KH-0000001",
          customerGroup: "B2B",
      },
      {
          id: "HĐ-000001",
          name: "Thu chi HĐ",
          contractType: "Dài hạn",
          status: "Đang kích hoạt",
          customerName: "ETON",
          customerId: "KH-0000001",
          customerGroup: "B2B",
      },
      {
          id: "HĐ-000001",
          name: "Thu chi HĐ",
          contractType: "Dài hạn",
          status: "Đang kích hoạt",
          customerName: "ETON",
          customerId: "KH-0000001",
          customerGroup: "B2B",
      },
      {
          id: "HĐ-000001",
          name: "Thu chi HĐ",
          contractType: "Dài hạn",
          status: "Đang kích hoạt",
          customerName: "ETON",
          customerId: "KH-0000001",
          customerGroup: "B2B",
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
