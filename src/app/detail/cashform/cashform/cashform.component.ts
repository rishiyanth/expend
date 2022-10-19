import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl } from '@angular/forms';
import { IEntry } from '../../../interfaces/entry';
import { HttpClient } from '@angular/common/http';
import { __values } from 'tslib';
import { paymentOptions } from '../../../../variables/globalvariables';
import { MAT_DATE_FORMATS } from '@angular/material/core';

import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'LL'
},
display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY'
}
};

@Component({
  selector: 'app-cashform',
  templateUrl: './cashform.component.html',
  styleUrls: ['./cashform.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class CashformComponent implements OnInit {

  @Output() closeRightNav: EventEmitter<any> = new EventEmitter();
  cashForm: FormGroup;
  iEntries: IEntry[]= [];
  options = paymentOptions;

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cashForm = this.fb.group({
      type: ['',Validators.required],
      amount: ['',Validators.required],
      date: [new Date(),Validators.required],
      category: ['',Validators.required],
      paymentMode: ['',Validators.required],
      description: [''],
    });
  }

  onSubmit(): void {
    // console.log('Submitted');
    const updatedDate = this.cashForm.value.date;
    this.cashForm.value.date = updatedDate.getFullYear()+'-'+ (updatedDate.getMonth()+1)+ '-'+ updatedDate.getDate();
    // console.log(JSON.stringify(this.cashForm.value))
    this.http.post('http://192.168.68.95:8000/addTransaction/',this.cashForm.value).subscribe((data)=>{
      console.log('This works');
    });
    this.iEntries.push(this.cashForm.value);
    console.log(this.cashForm.value);
    this.cashForm.reset();
    // Reset validators
    this.closeRightNav.emit();
  }

}
