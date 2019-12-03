
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuService } from './menu.service';
import { Menu } from './menu-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
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

    // this.subscription = this.recipeService.recipesChanged
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.recipes = recipes;
    //     }
    //   );
    // this.recipes = this.recipeService.getRecipes();
  }
      ngOnDestroy() {
  }
  
}
export interface MenuOptions {
  truckName: string;
  position: number;
  date : string;
}

const ELEMENT_DATA: MenuOptions[] = [
  {position: 1, truckName: 'Crazy Pyes', date:'12/3/2019 '},
  {position: 2, truckName: 'Chuck it Up', date: '13/3/2019 '},
  {position: 3, truckName: 'Pimp My Rice', date: '14/3/2019 '},
  {position: 4, truckName: 'Curry Up Now', date: '15/3/2019 '},
  {position: 5, truckName: 'Easy Slider', date: '16/3/2019 '},
  {position: 6, truckName: 'Hamborigi=hini', date: '17/3/2019 '},
  {position: 7, truckName: 'I dream of weenie', date: '18/3/2019 '},
  {position: 8, truckName: 'Gauc N Roll', date: '19/3/2019 '},
  {position: 9, truckName: 'Mamas and Tapas', date: '20/3/2019 '},
  {position: 10, truckName: 'Nachos Bizness', date: '21/3/2019 '},
];