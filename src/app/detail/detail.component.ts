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
  sideNav = false;

  mytime = new Date();

  constructor() { }

  ngOnInit(): void {
    console.log('DetailComponent INIT');
  }

  toggleCashIn(): void{
    this.cashIn = true;
    this.cashOut = false;
  }

  toggleCashOut(): void{
    this.cashIn = false;
    this.cashOut = true;
  }

  toggleRightNav(): void{
    this.sideNav = !this.sideNav;
  }

}
