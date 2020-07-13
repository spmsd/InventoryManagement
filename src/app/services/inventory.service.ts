import { Injectable } from '@angular/core';
import { Inventory } from '../shared/inventory';
import { INVENTORIES } from '../shared/inventories';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  displaylist:Inventory[];

  constructor() { }

  getInventory(): Observable<Inventory[]>{
  	return of(INVENTORIES);
  }

 
  getSingleItem(inv_id: string): Observable<Inventory> {
    return of(INVENTORIES.filter((item) => (item.inv_id === inv_id))[0]);
  }


   getCategoryList(cat_name: string): Observable<Inventory[]>{
    this.displaylist = [];
    for(let key in INVENTORIES){
      let value = INVENTORIES[key];
      //console.log(category.cat_name);
      //console.log(value);
      if(cat_name == value.cat_name){
        this.displaylist.push(INVENTORIES[key]);

      }
    }
    return of(this.displaylist);
  }
}
