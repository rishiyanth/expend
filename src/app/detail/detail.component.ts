import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild, AfterViewInit,EventEmitter} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IEntry } from '../interfaces/entry';

const ELEMENT_DATA: IEntry[] = [
  {
    id:1,
    type: 'Cash In',
    amount: 100,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:2,
    type: 'Cash Out',
    amount: 200,
    date: new Date(),
    category: 'Meetups',
    paymentMode: 'Online',
    description: 'B',
  },
  {
    id:3,
    type: 'Cash In',
    amount: 300,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:4,
    type: 'Cash Out',
    amount: 400,
    date: new Date(),
    category: 'Meetups',
    paymentMode: 'Online',
    description: 'B',
  },
  {
    id:5,
    type: 'Cash In',
    amount: 500,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
  {
    id:6,
    type: 'Cash In',
    amount: 600,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:7,
    type: 'Cash In',
    amount: 700,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
  {
    id:8,
    type: 'Cash In',
    amount: 800,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:9,
    type: 'Cash Out',
    amount: 900,
    date: new Date(),
    category: 'Meetups',
    paymentMode: 'Online',
    description: 'B',
  },
  {
    id:10,
    type: 'Cash In',
    amount: 1000,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
  {
    id:11,
    type: 'Cash In',
    amount: 1100,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:12,
    type: 'Cash Out',
    amount: 1200,
    date: new Date('Tue Nov 05 1985 06:23:20 GMT+0530 (IST)'),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:13,
    type: 'Cash In',
    amount: 1300,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
];

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  panelOpenState = false;
  sideNav = false;
  editNav=false;
  clickedData: IEntry;
  totalBalance: number = 0;
  totalCashIn: number = 0;
  totalCashOut: number = 0;

  // cashIn = true;
  // cashOut = false;

  displayedColumns: string[] = ['date', 'description', 'category', 'paymentMode', 'amount'];
  // Add balance later
  dataSource = new MatTableDataSource<IEntry>(ELEMENT_DATA);

  constructor(private liveAnnouncer: LiveAnnouncer) {}
  
  calTotalCashIn(fetchedData: any){
      for (var data of fetchedData){
        console.log(data)
        if(data.type == 'Cash In')
        {
          this.totalCashIn += data.amount
        }
        else(data.type == 'Cash Out')
        {
          this.totalCashOut += data.amount
        }
      }
      this.totalBalance = this.totalCashIn - this.totalCashOut
  }

  ngOnInit(): void {
    console.log('DetailComponent INIT');
    this.calTotalCashIn(ELEMENT_DATA)
    document.getElementById('cashin').innerHTML= this.totalCashIn.toString();
    document.getElementById('cashout').innerHTML= this.totalCashOut.toString();
    document.getElementById('cashbalance').innerHTML= this.totalBalance.toString();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // toggleCashIn(): void{
  //   this.cashIn = true;
  //   this.cashOut = false;
  // }

  // toggleCashOut(): void{
  //   this.cashIn = false;
  //   this.cashOut = true;
  // }s

  toggleRightNav(): void{
    this.sideNav = !this.sideNav;
  }

  toggleEditNav(): void{
    this.editNav= !this.editNav;
  }

  passData(content: any): void{
    this.editNav= !this.editNav;
    this.clickedData = content;
    // console.log(this.clickedData)
  }

  updateData(content: any){
    //TO CHANGE THE IENTRY DATA THAT WAS EDITED BY THE USER
    //THIS ALSO REFLECTS IN THE DB
    this.editNav= !this.editNav;
    console.log('Inside detail component');
    console.log(content);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

}
