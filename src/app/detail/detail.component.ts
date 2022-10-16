import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  panelOpenState = false;

  cashIn = true;
  cashOut = false;

  mytime = new Date();

  constructor() { }

  ngOnInit(): void {
    console.log('DetailComponent INIT');
  }

  toggleCashIn(){
    this.cashIn = true;
    this.cashOut = false;
  }

  toggleCashOut(){
    this.cashIn = false;
    this.cashOut = true;
  }

}
