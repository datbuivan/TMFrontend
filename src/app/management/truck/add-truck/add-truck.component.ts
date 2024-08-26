import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.scss']
})
export class AddTruckComponent implements OnInit {
    status: any[]
    form: FormGroup
    constructor(private formBuilder: FormBuilder,) {
      this.status = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
     }

    ngOnInit() {
      this.form = this.formBuilder.group({
          licensPlate: new FormControl('',Validators.compose([Validators.required])),
          load: new FormControl('',Validators.compose([Validators.required])),
          brand: new FormControl('',Validators.compose([Validators.required])),
          chassisNumber: new FormControl('',Validators.compose([Validators.required])),
          machineNumber: new FormControl('',Validators.compose([Validators.required])),
          length: new FormControl('',Validators.compose([Validators.required])),
          weight: new FormControl('',Validators.compose([Validators.required])),
          height: new FormControl('',Validators.compose([Validators.required])),
          volume: new FormControl('',Validators.compose([Validators.required])),
          badge: new FormControl('',Validators.compose([Validators.required])),
          registry: new FormControl('',Validators.compose([Validators.required])),
          bhtnds: new FormControl('',Validators.compose([Validators.required])),
          bhvcx: new FormControl('',Validators.compose([Validators.required])),
          cardVertDate: new FormControl('',Validators.compose([Validators.required])),
          documentStatus: new FormControl('',Validators.compose([Validators.required])),
          maintenanceStatus: new FormControl('',Validators.compose([Validators.required])),
          managementUnitName: new FormControl('',Validators.compose([Validators.required])),
          typeActive: new FormControl('',Validators.compose([Validators.required])),
          purchaseDate: new FormControl('',Validators.compose([Validators.required])),
          carDealerships: new FormControl('',Validators.compose([Validators.required])),
          costBuyCar: new FormControl('',Validators.compose([Validators.required])),
          note: new FormControl('',Validators.compose([Validators.required])),
          yearOfManufacture: new FormControl('',Validators.compose([Validators.required])),
      })
    }
    submit(){
      console.log(this.form.value)
    }

}
