import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild, AfterViewInit,EventEmitter} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IEntry } from '../interfaces/entry';

const ELEMENT_DATA: IEntry[] = [
  {
    type: 'Cash In',
    amount: 1892,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    type: 'Cash Out',
    amount: 610,
    date: new Date(),
    category: 'Meet',
    paymentMode: 'Online',
    description: 'B',
  },
  {
    type: 'Cash In',
    amount: 2909,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
  {
    type: 'Cash In',
    amount: 1892,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    type: 'Cash Out',
    amount: 610,
    date: new Date(),
    category: 'Meet',
    paymentMode: 'Online',
    description: 'B',
  },
  {
    type: 'Cash In',
    amount: 2909,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
  {
    type: 'Cash In',
    amount: 1892,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    type: 'Cash In',
    amount: 2909,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
  {
    type: 'Cash In',
    amount: 1892,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
  },
  {
    type: 'Cash Out',
    amount: 610,
    date: new Date(),
    category: 'Meet',
    paymentMode: 'Online',
    description: 'B',
  },
  {
    type: 'Cash In',
    amount: 2909,
    date: new Date(),
    category: 'Transport',
    paymentMode: 'Cash',
    description: 'C',
  },
  {
    type: 'Cash In',
    amount: 1892,
    date: new Date(),
    category: 'Food',
    paymentMode: 'Cash',
    description: 'A',
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

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

}
