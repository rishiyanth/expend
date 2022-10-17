import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl } from '@angular/forms';
import { IEntry } from '../../../interfaces/entry';
import { HttpClient } from '@angular/common/http';
import { __values } from 'tslib';
import { updateDecorator } from 'typescript/lib/tsserverlibrary';
@Component({
  selector: 'app-cashform',
  templateUrl: './cashform.component.html',
  styleUrls: ['./cashform.component.scss']
})
export class CashformComponent implements OnInit {

  @Output() closeRightNav: EventEmitter<any> = new EventEmitter();
  cashForm: FormGroup;
  iEntries: IEntry[]= [] 
  options: string[] = ["Food","Transport","Stationery","Meetups"]

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
    let updatedDate = this.cashForm.value.date
    this.cashForm.value.date = updatedDate.getFullYear()+"-"+ (updatedDate.getMonth()+1)+ "-"+ updatedDate.getDate()
    // console.log(JSON.stringify(this.cashForm.value))
    this.http.post('http://192.168.68.95:8000/addTransaction/',this.cashForm.value).subscribe((data)=>{
      console.log("This works")
    })
    this.iEntries.push(this.cashForm.value);
    this.cashForm.reset();
    // console.log(this.cashForm.value)
    // Reset validators
    this.closeRightNav.emit();
  }

}
