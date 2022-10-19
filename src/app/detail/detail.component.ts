import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild, AfterViewInit,EventEmitter} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IEntry } from '../interfaces/entry';
import { totalBalance,totalCashIn, totalCashOut } from '../../variables/globalvariables';

const ELEMENT_DATA: IEntry[] = [
  {
    id:1,
    type: 'Cash In',
    amount: 1892,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:2,
    type: 'Cash Out',
    amount: 610,
    date: new Date(),
    category: 'Meetups',
    paymentMode: 'Online',
    description: 'B',
  },
  {
    id:3,
    type: 'Cash In',
    amount: 1892,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:4,
    type: 'Cash Out',
    amount: 610,
    date: new Date(),
    category: 'Meetups',
    paymentMode: 'Online',
    description: 'B',
  },
  {
    id:5,
    type: 'Cash In',
    amount: 2909,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
  {
    id:6,
    type: 'Cash In',
    amount: 1892,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:7,
    type: 'Cash In',
    amount: 2909,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
  {
    id:8,
    type: 'Cash In',
    amount: 1892,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:9,
    type: 'Cash Out',
    amount: 610,
    date: new Date(),
    category: 'Meetups',
    paymentMode: 'Online',
    description: 'B',
  },
  {
    id:10,
    type: 'Cash In',
    amount: 2909,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
  {
    id:11,
    type: 'Cash In',
    amount: 1892,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:12,
    type: 'Cash Out',
    amount: 11500,
    date: new Date('Tue Nov 05 1985 06:23:20 GMT+0530 (IST)'),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    id:13,
    type: 'Cash In',
    amount: 2909,
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

  // cashIn = true;
  // cashOut = false;

  displayedColumns: string[] = ['date', 'description', 'category', 'paymentMode', 'amount'];
  // Add balance later
  dataSource = new MatTableDataSource<IEntry>(ELEMENT_DATA);

  constructor(private liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    console.log('DetailComponent INIT');
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
