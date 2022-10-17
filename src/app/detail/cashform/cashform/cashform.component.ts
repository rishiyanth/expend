import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { IEntry } from '../../../interfaces/entry';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cashform',
  templateUrl: './cashform.component.html',
  styleUrls: ['./cashform.component.scss']
})
export class CashformComponent implements OnInit {

  @Output() closeRightNav: EventEmitter<any> = new EventEmitter();
  cashForm: FormGroup;
  iEntries: IEntry[] = []

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.cashForm = this.fb.group({
      type: ['',Validators.required],
      amount: ['',Validators.required],
      date: ['',Validators.required],
      category: ['',Validators.required],
      paymentMode: ['',Validators.required],
      description: [''],
    });
  }

  onSubmit(): void {
    console.log('Submitted');
    this.iEntries.push(this.cashForm.value);
    this.cashForm.reset();
    console.log(this.iEntries)
    // Reset validators
    // this.http.post("",this.iEntries).subscribe(()=>{
    //   console.log("Data sent successfully");
    // })
    this.closeRightNav.emit();
  }

}
