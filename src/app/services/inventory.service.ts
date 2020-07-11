import { Injectable } from '@angular/core';
import { Inventory } from '../shared/inventory';
import { INVENTORIES } from '../shared/inventories';
import { VEGETABLES } from '../shared/vegetables';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  displaylist:Inventory[];

  constructor() { }

  getInventory(): Inventory[]{
  	return INVENTORIES;
  }

 
  getSingleItem(inv_id: string): Inventory {
    return INVENTORIES.filter((item) => (item.inv_id === inv_id))[0];
  }


   getCategoryList(cat_name: string): Inventory[]{
    this.displaylist = [];
    for(let key in INVENTORIES){
      let value = INVENTORIES[key];
      //console.log(category.cat_name);
      //console.log(value);
      if(cat_name == value.cat_name){
        this.displaylist.push(INVENTORIES[key]);

      }
    }
    return this.displaylist;
  }
}
