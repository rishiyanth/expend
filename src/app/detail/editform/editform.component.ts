import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { paymentOptions } from '../../../variables/globalvariables';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})
export class EditformComponent implements OnInit {

  // @Output() closeRightNav: EventEmitter<any> = new EventEmitter();
  @Output() updatedData: EventEmitter<any> = new EventEmitter();
  @Input() data !: any
  editForm: FormGroup;
  options = paymentOptions
  constructor(private fb: FormBuilder) { }

  // selectedCategory = this.data.category
  // selectedPaymentMode = this.data.paymentMode

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: [this.data.id],
      type: ['',Validators.required],
      amount: ['',Validators.required],
      date: [new Date(),Validators.required],
      category: ['',Validators.required],
      paymentMode: ['',Validators.required],
      description: [''],
    });
  }

  onSubmit(): void {
    this.data = this.editForm.value
    // console.log(this.data)
    this.updatedData.emit(this.data);
  }
}
