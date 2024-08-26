import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss']
})
export class AddUnitComponent implements OnInit {
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
        group: new FormControl('',Validators.compose([Validators.required])),
        emailCompany: new FormControl('',Validators.compose([Validators.required])),
        createdDate: new FormControl('',Validators.compose([Validators.required])),
        invoicingAddress: new FormControl('',Validators.compose([Validators.required])),
        bankName: new FormControl('',Validators.compose([Validators.required])),
        accountOwner: new FormControl('',Validators.compose([Validators.required])),
        accountNumber: new FormControl('',Validators.compose([Validators.required])),
        bankAddress: new FormControl('',Validators.compose([Validators.required])),
        status: new FormControl('',Validators.compose([Validators.required])),
        businessLicense: new FormControl('',Validators.compose([Validators.required])),
        transportBusinessLicense: new FormControl('',Validators.compose([Validators.required])),
        contact: new FormControl('',Validators.compose([Validators.required])),
        phoneContact: new FormControl('',Validators.compose([Validators.required])),
        emailContact: new FormControl('',Validators.compose([Validators.required])),
        taxName: new FormControl('',Validators.compose([Validators.required])),
        taxCode: new FormControl('',Validators.compose([Validators.required])),
        note: new FormControl('',Validators.compose([Validators.required])),
    })
  }
  submit(){
    console.log(this.form.value)
  }

}
