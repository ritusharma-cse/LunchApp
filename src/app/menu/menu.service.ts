import { Injectable } from '@angular/core';
import { Menu } from './menu-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  constructor(private http: HttpClientModule){};
  apiAccount = environment.API_URL;
  // private menu : Menu[]=[ 
  // new Menu('testing add','icecream','dinner','wine'),
  // new Menu('pasta','burger','pizza','sweets')
private recipes: Menu[] = [];

getRecipe(index: number) {
  return this.recipes[index];
}
// getMenuItem (): Observable<any> {
//    return this.http.get(this.apiAccount + '/date/')
//    .pipe(
//      (data => {
//        return data;
//      }),
//    );
//  }
}