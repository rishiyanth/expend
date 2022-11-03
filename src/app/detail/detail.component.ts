import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild, AfterViewInit,EventEmitter, ElementRef} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IEntry } from '../interfaces/entry';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { paymentOptions,paymentType,paymentMode} from '../../variables/globalvariables';
import { ChartConfiguration, ChartOptions } from 'chart.js';

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
  {
    id:14,
    type: 'Cash In',
    amount: 7000,
    date: new Date(),
    category: 'Stationery',
    paymentMode: 'Online',
    description: 'C',
  },
  {
    id:14,
    type: 'Cash Out',
    amount: 1000,
    date: new Date(),
    category: 'Stationery',
    paymentMode: 'Cash',
    description: 'F',
  }
];

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('cashInToggle') cashInToggle: MatButtonToggle;
  @ViewChild('cashOutToggle') cashOutToggle: MatButtonToggle;


  panelOpenState = false;
  sideNav = false;
  editNav=false;
  clickedData: IEntry;
  totalBalance = 0;
  totalCashIn = 0;
  totalCashOut = 0;
  filterValue = '';
  category = '';
  payment = '';
  dataCategories = new Array(paymentOptions.length).fill(0);
  dataType = new Array(paymentType.length).fill(0);
  dataMode = new Array(paymentMode.length).fill(0);
  toggleButtonReset = false;

  displayedColumns: string[] = ['date', 'description', 'category', 'paymentMode', 'amount','type'];
  // Add balance later
  dataSource = new MatTableDataSource<IEntry>(ELEMENT_DATA);
  categories: string[] = paymentOptions;

  //FOR PIE CHART BASED ON CATEGORY

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public chartLabelCategory = paymentOptions;
  public chartDataCategory = [ {
    data: this.evalChartCategories(ELEMENT_DATA)
  } ];
  public chartLegend = true;
  public chartPlugins = [];

  //FOR BAR CHART

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: paymentMode,
    datasets: [{data: this.evalChartMode(ELEMENT_DATA),label: 'Total expenses'}]
  };

  //FOR PIE CHART BASED ON TYPE

  public chartLabelType = paymentType;
  public chartDataType = [ {
    data: this.evalChartType(ELEMENT_DATA)
  } ];


  constructor(private liveAnnouncer: LiveAnnouncer) {}

  calTotalCashIn(fetchedData: any){
      for (const data of fetchedData){
        // console.log(data);
        if(data.type === 'Cash Out')
        {
          this.totalCashOut += data.amount;
        }
        if(data.type === 'Cash In')
        {
          this.totalCashIn += data.amount;
        }
        // console.log(this.totalCashIn+" "+this.totalCashOut)
      }
      this.totalBalance = this.totalCashIn - this.totalCashOut;
  }

  evalChartCategories(fetchedData: any){
    for(const data of fetchedData){
      for(const index in paymentOptions){
        // console.log(index+":"+paymentOptions[index])
        if(data.category === paymentOptions[index]){
          this.dataCategories[index]++;
          // console.log("OK!"+this.dataValues[index])
        }
      }
    }
    // console.log("THis is a block:"+this.dataValues);
    return this.dataCategories;
  }

  evalChartType(fetchedData: any){
    for(const data of fetchedData){
      for(const index in paymentOptions){
        // console.log(index+":"+paymentOptions[index])
        if(data.type === paymentType[index]){
          this.dataType[index]++;
          console.log('OK!'+this.dataType[index]);
        }
      }
    }
    // console.log("THis is a block:"+this.dataValues);
    return this.dataType;
  }

  evalChartMode(fetchedData: any){
    for(const data of fetchedData){
      for(const index in paymentMode){
        // console.log(index+":"+paymentOptions[index])
        if(data.paymentMode === paymentMode[index]){
          this.dataMode[index]++;
          console.log('OK!'+this.dataMode[index]);
        }
      }
    }
    // console.log("THis is a block:"+this.dataValues);
    return this.dataMode;
  }

  ngOnInit(): void {
    console.log('DetailComponent INIT');
    this.calTotalCashIn(ELEMENT_DATA);
    document.getElementById('cashin').innerHTML= this.totalCashIn.toString();
    document.getElementById('cashout').innerHTML= this.totalCashOut.toString();
    document.getElementById('cashbalance').innerHTML= this.totalBalance.toString();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

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
    // console.log(content);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  filterTable(value): void{
    this.filterValue = value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }

  resetFilter(): void{
    this.filterValue = '';
    this.category = '';
    this.payment = '';
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
    this.cashInToggle.checked = false;
    this.cashOutToggle.checked = false;
  }

}

  // cashIn = true;
  // cashOut = false;

  // toggleCashIn(): void{
  //   this.cashIn = true;
  //   this.cashOut = false;
  // }

  // toggleCashOut(): void{
  //   this.cashIn = false;
  //   this.cashOut = true;
  // }
