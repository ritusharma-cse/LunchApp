
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuService } from './menu.service';
import { Menu } from './menu-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  displayedColumns: string[] = ['position','truckName', 'date'];
  dataSource = new MatTableDataSource<MenuOptions>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  menu: Menu[];
  constructor(private menuService:MenuService) { }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    // events: string[] = [];

    // this.subscription = this.menuService.menuChanged
    //   .subscribe(
    //     (menu: Menu[]) => {
    //       this.menu = menus;
    //     }
    //   );
    // this.menus = this.menuService.getMenus();
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    let todayDate = event.value;
    console.log(todayDate);
    // this.events.push(`${type}: ${event.value}`);
    this.dataSource = new MatTableDataSource<MenuOptions>(ELEMENT_DATA1);
    // let start = "10/12/2019";
    // let end = "20/12/2019"; // this should be of object Date()

    //     let selectedMembers = ELEMENT_DATA.filter(m => {
    //       if ( m.date > todayDate && m.date < end) // or you can cast here to Date()
    //         return m;
    //         console.log(m);
    // });

    // console.log(selectedMembers);  }
  }
}
export interface MenuOptions {
  truckName: string;
  position: number;
  date : string;
}
const ELEMENT_DATA1: MenuOptions[] = [
  {position: 22, truckName: 'Crazy Pyes', date:'12/3/2019 '},
  {position: 23, truckName: 'Chuck it Up', date: '13/3/2019 '},
  {position: 24, truckName: 'Pimp My Rice', date: '14/3/2019 '},
  {position: 25, truckName: 'Curry Up Now', date: '15/3/2019 '},
  {position: 26, truckName: 'Easy Slider', date: '16/3/2019 '},
]
const ELEMENT_DATA: MenuOptions[] = [
  {position: 1, truckName: 'Crazy Pyes', date:'10/12/2019 '},
  {position: 2, truckName: 'Chuck it Up', date: '11/12/2019 '},
  {position: 3, truckName: 'Pimp My Rice', date: '12/12/2019 '},
  {position: 4, truckName: 'Curry Up Now', date: '13/12/2019 '},
  {position: 5, truckName: 'Easy Slider', date: '14/12/2019 '},
  {position: 6, truckName: 'Hamborigi=hini', date: '15/12/2019 '},
  {position: 7, truckName: 'I dream of weenie', date: '26/12/2019 '},
  {position: 8, truckName: 'Gauc N Roll', date: '25/12/2019'},
  {position: 9, truckName: 'Crazy Pyes', date:'10/12/2019 '},
  {position: 10, truckName: 'Chuck it Up', date: '11/12/2019 '},
  {position: 11, truckName: 'Pimp My Rice', date: '12/12/2019 '},
  {position: 12, truckName: 'Curry Up Now', date: '13/12/2019 '},
  {position: 13, truckName: 'Easy Slider', date: '14/12/2019 '},
  {position: 14, truckName: 'Hamborigi=hini', date: '15/12/2019 '},
  {position: 15, truckName: 'I dream of weenie', date: '26/12/2019 '},
  {position: 16, truckName: 'Gauc N Roll', date: '25/12/2019'},
  {position: 17, truckName: 'Crazy Pyes', date:'10/12/2019 '},
  {position: 18, truckName: 'Chuck it Up', date: '11/12/2019 '},
  {position: 19, truckName: 'Pimp My Rice', date: '12/12/2019 '},
  {position: 20, truckName: 'Curry Up Now', date: '13/12/2019 '},
];