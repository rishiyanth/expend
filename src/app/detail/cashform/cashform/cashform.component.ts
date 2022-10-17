import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cashform',
  templateUrl: './cashform.component.html',
  styleUrls: ['./cashform.component.scss']
})
export class CashformComponent implements OnInit {

  @Output() closeRightNav: EventEmitter<any> = new EventEmitter();
  cashForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cashForm = this.fb.group({
      amount: ['',Validators.required],
      date: ['',Validators.required],
      category: ['',Validators.required],
      paymentMode: ['',Validators.required],
      description: [''],
    });
  }

  onSubmit(): void {
    console.log('Submitted');
    console.log(this.cashForm.value);
    this.cashForm.reset();
    this.closeRightNav.emit();
  }

}
