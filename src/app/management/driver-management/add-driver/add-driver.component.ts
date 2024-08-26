import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit {
  value2: any;
  value9: any;
  status: any[];
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
        name: new FormControl('',Validators.compose([Validators.required])),
        address: new FormControl('',Validators.compose([Validators.required])),
        date: new FormControl('',Validators.compose([Validators.required])),
        phoneNumber: new FormControl('',Validators.compose([Validators.required])),
        cmnd: new FormControl('',Validators.compose([Validators.required])),
        driverLicense: new FormControl('',Validators.compose([Validators.required])),
        driverLicenseExpirationDate: new FormControl('',Validators.compose([Validators.required])),
        rank: new FormControl('',Validators.compose([Validators.required])),
        formOfWork: new FormControl('',Validators.compose([Validators.required])),
        status: new FormControl('',Validators.compose([Validators.required])),
        bankName: new FormControl('',Validators.compose([Validators.required])),
        accountNumber: new FormControl('',Validators.compose([Validators.required])),
        accountName: new FormControl('',Validators.compose([Validators.required])),
        managementUnitName: new FormControl('',Validators.compose([Validators.required])),
        coordinatorInCharge: new FormControl('',Validators.compose([Validators.required])),
        studyDate: new FormControl('',Validators.compose([Validators.required])),
        trialDate: new FormControl('',Validators.compose([Validators.required])),
        startDate: new FormControl('',Validators.compose([Validators.required])),
        endDate: new FormControl('',Validators.compose([Validators.required])),
        taxName: new FormControl('',Validators.compose([Validators.required])),
        taxCode: new FormControl('',Validators.compose([Validators.required])),
        note: new FormControl('',Validators.compose([Validators.required])),
    })
  }
  submit(){
    console.log(this.form.value)
  }

}
